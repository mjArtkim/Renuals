<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { RouterLink, RouterView } from 'vue-router';
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger)

function initSlider() {
  const isMobile = window.innerWidth <= 880
  const wrapper = document.querySelector('[data-slider="list"]')
  const slides = gsap.utils.toArray('[data-slider="slide"]')
  if (!wrapper || slides.length === 0) {
    console.warn('⚠️ 슬라이드 요소를 찾을 수 없습니다.')
    return
  }
  const nextButton = document.querySelector('[data-slider="button-next"]')
  const prevButton = document.querySelector('[data-slider="button-prev"]')

  const totalElement = document.querySelector('[data-slide-count="total"]')
  const stepElement = document.querySelector('[data-slide-count="step"]')
  const stepsParent = stepElement.parentElement

  let activeElement
  const totalSlides = slides.length

  totalElement.textContent = totalSlides < 10 ? `0${totalSlides}` : totalSlides

  if (stepsParent && stepElement) {
    stepsParent.innerHTML = ''
    slides.forEach((_, index) => {
      const stepClone = stepElement.cloneNode(true)
      stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : index + 1
      stepsParent.appendChild(stepClone)
    })
  }

  const allSteps = stepsParent.querySelectorAll('[data-slide-count="step"]')
  const loopFn = isMobile ? verticalLoop : horizontalLoop;
  const loop = loopFn(slides, { 
    paused: true,
    draggable: true,
    center: false,
    speed: 0.5,

    onChange: (element, index) => {
      activeElement && activeElement.classList.remove('active');
      const nextSibling = element.nextElementSibling || slides[0];
      nextSibling.classList.add('active');
      activeElement = nextSibling;
      gsap.to(allSteps, {
        y: `${-100 * index}%`,
        ease: 'power3',
        duration: 0.45
      });
    }
  })

  slides.forEach((slide, i) =>
    slide.addEventListener('click', () =>
      loop.toIndex(i - 1, { ease: 'power3', duration: 0.725 })
    )
  )

  nextButton.addEventListener('click', () =>
    loop.next({ ease: 'power3', duration: 0.725 })
  )
  prevButton.addEventListener('click', () =>
    loop.previous({ ease: 'power3', duration: 0.725 })
  )
}

function horizontalLoop(items, config) {
  let timeline
  items = gsap.utils.toArray(items)
  config = config || {}

  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex()
            if (lastIndex !== i) {
              lastIndex = i
              onChange(items[i], i)
            }
          },
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false
          ? (v) => v
          : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container =
        center === true
          ? items[0].parentNode
          : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'))
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
              gsap.getProperty(el, 'xPercent')
          )
          b2 = el.getBoundingClientRect()
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left)
          b1 = b2
        })
        gsap.set(items, { xPercent: (i) => xPercents[i] })
        totalWidth = getTotalWidth()
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center
          ? tl.duration() * (container.offsetWidth / 2) / totalWidth
          : 0
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels['label' + i] +
                (tl.duration() * widths[i]) / 2 / totalWidth -
                timeOffset
            )
          })
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d
        while (i--) {
          d = Math.abs(values[i] - value)
          if (d > wrap / 2) d = wrap - d
          if (d < closest) {
            closest = d
            index = i
          }
        }
        return index
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop
        tl.clear()
        for (i = 0; i < length; i++) {
          item = items[i]
          curX = (xPercents[i] / 100) * widths[i]
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0]
          distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX')
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                )
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
              },
              distanceToLoop / pixelsPerSecond
            )
            .add('label' + i, distanceToStart / pixelsPerSecond)
          times[i] = distanceToStart / pixelsPerSecond
        }
        timeWrap = gsap.utils.wrap(0, tl.duration())
      },
      refresh = (deep) => {
        let progress = tl.progress()
        tl.progress(0, true)
        populateWidths()
        deep && populateTimeline()
        populateOffsets()
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true)
      },
      onResize = () => refresh(true),
      proxy

    gsap.set(items, { x: 0 })
    populateWidths()
    populateTimeline()
    populateOffsets()
    window.addEventListener('resize', onResize)

    function toIndex(index, vars) {
      vars = vars || {}
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length)
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex]
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1)
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap }
      }
      curIndex = newIndex
      vars.overwrite = true
      gsap.killTweensOf(proxy)
      return vars.duration === 0
        ? tl.time(timeWrap(time))
        : tl.tweenTo(time, vars)
    }

    tl.toIndex = (index, vars) => toIndex(index, vars)
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration())
      if (setCurrent) {
        curIndex = index
        indexIsDirty = false
      }
      return index
    }
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex)
    tl.next = (vars) => toIndex(tl.current() + 1, vars)
    tl.previous = (vars) => toIndex(tl.current() - 1, vars)
    tl.times = times
    tl.progress(1, true).progress(0, true)

    if (config.reversed) {
      tl.vars.onReverseComplete()
      tl.reverse()
    }

    if (config.draggable && typeof Draggable === 'function') {
      proxy = document.createElement('div')
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeX,
        wasPlaying,
        align = () =>
          tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true)

      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: 'x',
        onPressInit() {
          let x = this.x
          gsap.killTweensOf(tl)
          wasPlaying = !tl.paused()
          tl.pause()
          startProgress = tl.progress()
          refresh()
          ratio = 1 / totalWidth
          initChangeX = startProgress / -ratio - x
          gsap.set(proxy, { x: startProgress / -ratio })
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime
          Math.abs(dif) > tl.duration() / 2 &&
            (dif += dif < 0 ? tl.duration() : -tl.duration())
          lastSnap = (time + dif) / tl.duration() / -ratio
          return lastSnap
        },
        onRelease() {
          syncIndex()
          draggable.isThrowing && (indexIsDirty = true)
        },
        onThrowComplete: () => {
          syncIndex()
          wasPlaying && tl.play()
        }
      })[0]
      tl.draggable = draggable
    }

    tl.closestIndex(true)
    lastIndex = curIndex
    onChange && onChange(items[curIndex], curIndex)
    timeline = tl

    return () => window.removeEventListener('resize', onResize)
  })

  return timeline
}

function verticalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};

  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startY = items[0].offsetTop,
      times = [],
      heights = [],
      spaceBefore = [],
      yPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false
          ? (v) => v
          : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container =
        center === true
          ? items[0].parentNode
          : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalHeight,
      
      getTotalHeight = () =>
        items[length - 1].offsetTop +
        (yPercents[length - 1] / 100) * heights[length - 1] -
        startY +
        spaceBefore[0] +
        items[length - 1].offsetHeight *
          gsap.getProperty(items[length - 1], "scaleY") +
        (parseFloat(config.paddingBottom) || 0),

      populateHeights = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
          yPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "y", "px")) / heights[i]) * 100 +
              gsap.getProperty(el, "yPercent")
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
          b1 = b2;
        });
        gsap.set(items, { yPercent: (i) => yPercents[i] });
        totalHeight = getTotalHeight();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center
          ? tl.duration() * (container.offsetHeight / 2) / totalHeight
          : 0
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels['label' + i] +
                (tl.duration() * heights[i]) / 2 / totalHeight -
                timeOffset
            )
          })
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d
        while (i--) {
          d = Math.abs(values[i] - value)
          if (d > wrap / 2) d = wrap - d
          if (d < closest) {
            closest = d
            index = i
          }
        }
        return index
      },
      populateTimeline = () => {
        let i, item, curY, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curY = (yPercents[i] / 100) * heights[i];
          distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
          distanceToLoop =
            distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");

          tl.to(
            item,
            {
              yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0
          )
            .fromTo(
              item,
              {
                yPercent: snap(
                  ((curY - distanceToLoop + totalHeight) / heights[i]) * 100
                ),
              },
              {
                yPercent: yPercents[i],
                duration:
                  (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration())
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateHeights();
        deep && populateTimeline();
        populateOffsets()
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy;

    gsap.set(items, { y: 0 });
    populateHeights();
    populateTimeline();
    populateOffsets()
    window.addEventListener("resize", onResize);

    function toIndex(index, vars) {
      vars = vars || {}
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length)
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex]
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1)
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap }
      }
      curIndex = newIndex
      vars.overwrite = true
      gsap.killTweensOf(proxy)
      return vars.duration === 0
        ? tl.time(timeWrap(time))
        : tl.tweenTo(time, vars)
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration())
      if (setCurrent) {
        curIndex = index
        indexIsDirty = false
      }
      return index
    }

    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex)
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;

    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete()
      tl.reverse()
    }
    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeY,
        wasPlaying,
        align = () =>
          tl.progress(wrap(startProgress + (draggable.startY - draggable.y) * ratio)),
        syncIndex = () => tl.closestIndex(true)

      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "y",
        resistance: 20,
        inertia: true,
        onPressInit() {
          let x = this.y;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalHeight ? 1 / totalHeight : 0.000001;
          initChangeY = startProgress / -ratio - x;
          gsap.set(proxy, { y: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          if (Math.abs(startProgress / -ratio - this.y) < 10) {
            return lastSnap + initChangeY
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime
          Math.abs(dif) > tl.duration() / 2 &&
            (dif += dif < 0 ? tl.duration() : -tl.duration())
          lastSnap = (time + dif) / tl.duration() / -ratio
          return lastSnap
        },
        onRelease() {
          syncIndex()
          draggable.isThrowing && (indexIsDirty = true)
        },
        onThrowComplete: () => {
          syncIndex()
          wasPlaying && tl.play()
        }
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex
    onChange && onChange(items[curIndex], curIndex)
    timeline = tl

    return () => window.removeEventListener("resize", onResize);
  });

  return timeline;
}

onMounted(() => {
  let loopInstance = initSlider()


  const onResize = () => {
    gsap.killTweensOf("*") // 기존 애니메이션 정리
    ScrollTrigger.getAll().forEach(t => t.kill()) // 트리거 정리
    initSlider() // 새로 초기화
  }

  window.addEventListener("resize", onResize)

  onUnmounted(() => {
    if (typeof onResize === "function") window.removeEventListener("resize", onResize)
    gsap.killTweensOf("*")
    ScrollTrigger.getAll().forEach(t => t.kill())
  })

  initSlider()
})
</script>
<template>
  <section class="works">
    <div class="overlay">
      <div class="overlay-inner">
        <div class="overlay-count-row">
          <div class="count-column"><h2 data-slide-count="step" class="count-heading">01</h2></div>
          <div class="count-row-divider"></div>
          <div class="count-column"><h2 data-slide-count="total" class="count-heading">06</h2></div>
        </div>
        <div class="overlay-nav-row">
          <button aria-label="previous slide" data-slider="button-prev" class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewbox="0 0 17 12"
              fill="none"
              class="button-arrow"
            >
              <path
                d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="button-overlay">
              <div class="overlay-corner"></div>
              <div class="overlay-corner top-right"></div>
              <div class="overlay-corner bottom-left"></div>
              <div class="overlay-corner bottom-right"></div>
            </div>
          </button>
          <button aria-label="previous slide" data-slider="button-next" class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewbox="0 0 17 12"
              fill="none"
              class="button-arrow next"
            >
              <path
                d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="button-overlay">
              <div class="overlay-corner"></div>
              <div class="overlay-corner top-right"></div>
              <div class="overlay-corner bottom-left"></div>
              <div class="overlay-corner bottom-right"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="slider-wrap">
        <div data-slider="list" class="slider-list">
          <div data-slider="slide" class="slider-slide">
            <div class="slide-inner">
              <img
                src="@/assets/img/new/new_work_06.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <a href="http://ideartk.com/backchun/" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div data-slider="slide" class="slider-slide active">
            <div class="slide-inner">
              <img
                src="@/assets/img/tf/tf_00.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <router-link to="/mytalent" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div data-slider="slide" class="slider-slide">
            <div class="slide-inner">
              <img
                src="@/assets/img/new/new_work_01.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <a href="https://djthirdparty.com" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div data-slider="slide" class="slider-slide">
            <div class="slide-inner">
              <img
                src="@/assets/img/new/new_work_03.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <a href="https://icbox.io/" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div data-slider="slide" class="slider-slide">
            <div class="slide-inner">
              <img
                src="@/assets/img/new/new_work_04.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <router-link to="/other" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div data-slider="slide" class="slider-slide">
            <div class="slide-inner">
              <img
                src="@/assets/img/new/new_work_05.webp"
                loading="lazy"
              />
              <div class="slide-caption">
                <a href="http://ideartk.com/songjung/" class="caption">
                  <div>More</div>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.works {
  width: 100%;
  min-height: 60vh;
  position: relative;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay {
  z-index: 2;
  background-image: linear-gradient(90deg, #f1f1f1 50%, rgba(241, 241, 241, 0.3) 90%, transparent);
  justify-content: flex-start;
  align-items: center;
  width: 37.5em;
  height: 100%;
  padding-left: 2em;
  display: flex;
  position: absolute;
  inset: 0% auto 0% 0%;
}
.overlay-inner {
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 28.125em;
  display: flex;
}
.overlay-count-row {
  grid-column-gap: 0.2em;
  grid-row-gap: 0.2em;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'GmarketSans';
  font-size: 5.625em;
  font-weight: 700;
  display: flex;
}
.count-column {
  height: 1em;
  overflow: hidden;
}
.count-heading {
  width: 2ch;
  font-size: 1em;
  line-height: 1;
  margin: 0px;
}
.count-row-divider {
  background-color: #000;
  width: 5px;
  height: 100%;
  transform: rotate(15deg);
}
.overlay-nav-row {
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  display: flex;
}
.button {
  background-color: #0000;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4em;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  padding: 0;
  display: flex;
  position: relative;
  font-size: inherit;
}
.button-arrow {
  flex: none;
  width: 1em;
  height: 0.75em;
}
.button-arrow.next {
  transform: rotate(180deg);
}
.button-overlay {
  z-index: 2;
  position: absolute;
  inset: -1px;
}
.overlay-corner {
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-top-left-radius: 0.4em;
  width: 1em;
  height: 1em;
}
.overlay-corner.top-right {
  position: absolute;
  inset: 0% 0% auto auto;
  transform: rotate(90deg);
}
.overlay-corner.bottom-left {
  position: absolute;
  inset: auto auto 0% 0%;
  transform: rotate(-90deg);
}
.overlay-corner.bottom-right {
  position: absolute;
  inset: auto 0% 0% auto;
  transform: rotate(180deg);
}
.button,
.button-overlay {
  transition:
    transform 0.475s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.475s cubic-bezier(0.65, 0, 0.35, 1);
}
.button:hover .button-overlay {
  transform: scale(1.4);
}
.overlay-nav-row:hover:has(.button:hover) .button {
  opacity: 0.4;
}
.button:hover {
  transform: scale(0.85);
  opacity: 1 !important;
}
.main {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
}
.slider-wrap {
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}
.slider-list {
  flex-flow: row;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
  position: relative;
}
.slider-slide {
  flex: none;
  width: 42.5em;
  height: 28em;
  padding-left: 1.25em;
  padding-right: 1.25em;
  transition: opacity 0.4s;
  position: relative;
}
[data-slider='slide'] {
  opacity: 0.2;
}
[data-slider='slide'].active {
  opacity: 1;
}
[data-slider='slide'].active .slide-caption {
  transition-delay: 0.3s;
}
.slide-inner {
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.slide-inner img {
  max-width: 1024px;
  height: 100%; 
  margin: auto;
  object-fit: cover;
  object-position: 30% 50%;
  @media (max-width: 1024px) {
    width: 70vw;
  }

  @media (max-width: 479px) {
    width: 90vw;
  }
}
.slide-caption {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  .caption {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    gap: 0.4em;
    font-size: 14px;
    border: 1px solid rgba($color: #fff, $alpha: 0.3);
    border-radius: 5px;
    color: #fff;
    overflow: hidden;
    padding: 5px 10px;
    z-index: 0;
    text-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.5);
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3px) brightness(0.9) contrast(140%) saturate(200%);
      -webkit-backdrop-filter: blur(3px)  brightness(0.9) contrast(140%) saturate(200%);
      transition: background-color 0.3s ease-in-out;
      opacity: 1;
      z-index: -1;
    }
    &:hover::before{
    opacity: 0.8;
    background-color: rgba(0, 25, 106, 0.7);
  }
  }
  div, i {
    position: relative;
    z-index: 1;
    color: #fff;
  }

}

.slide-caption {
  transition:
    transform 0.525s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.525s cubic-bezier(0.65, 0, 0.35, 1);
  transition-delay: 0s;
}
html:not(.wf-design-mode) .slide-caption {
  opacity: 0;
  transform: translate(-25%, 0px);
}
html:not(.wf-design-mode) [data-slider='slide'].active .slide-caption {
  opacity: 1;
  transform: translate(0%, 0px);
}

@media (max-width: 880px) {
  .works {
    min-height: 80vh;
  }
  .overlay {
    width: 100%;
    height: 40%;
    background-image: linear-gradient(-180deg, #f1f1f1 50%, rgba(241, 241, 241, 0.3) 90%, transparent);
  }
  .overlay-inner {
    height: 55vh;
  }
  .overlay-count-row {
    position: absolute;
    top: 20px;
    right: 30px;
    grid-column-gap: .4em;
    font-size: 3em;
  }
  .count-row-divider {
    position: absolute;
    top: 0px;
    left: 1.5em;
  }
  .overlay-nav-row{
    position: absolute;
    top: 20px;
    left: 30px;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }
  .button {
    width: 3em;
    height: 3em;
  }
  .slider-wrap {
    align-items: flex-start;
    justify-content: center;
  }
  .slider-slide {
    width: 50%;
    height: 300px;
    padding-left: 1em;
    padding-right: 1em;
    position: relative;
  }
  .slider-list {
    flex-direction: column;
    align-items: center;
  }

  .slider-slide {
    width: 100%;
    height: auto;
    padding: 1em 0;
  }
  [data-slider="list"].vertical {
    flex-direction: column;
  }
}
@media (min-width: 881px) and (max-width: 1200px) {
}
</style>
