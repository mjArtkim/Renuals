<script setup>
import { onMounted, ref, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import AOS from 'aos'
import 'aos/dist/aos.css'
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase)

const { t, locale } = useI18n()
const images = [
  new URL('@/assets/img/tf/tf_07.webp', import.meta.url).href,
  new URL('@/assets/img/tf/tf_08.webp', import.meta.url).href,
  new URL('@/assets/img/tf/tf_09.webp', import.meta.url).href,
  new URL('@/assets/img/tf/tf_10.webp', import.meta.url).href,
]
const selectedImage = ref(null)
const fullImg = ref(null)
const mtone = ref(null)
CustomEase.create('mt-line', '0.625, 0.08, 0, 1')
let splitInstance = null
const isScrolling = ref(false) 
const animation = ref(null)
let scrollTriggers = []
let tween = null
function handleScroll() {
  isScrolling.value = window.scrollY > 300 
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

function openImage(e, img) {
  if (window.innerWidth <= 780) return

  selectedImage.value = img

  nextTick(() => {
    const imgEl = fullImg.value
    gsap.set(imgEl, {
      scale: 0,
      opacity: 0,
      xPercent: -50,
      yPercent: -50,
      top: '50%',
      left: '50%',
      position: 'fixed',
      zIndex: 100,
    })
    tween = gsap.to(imgEl, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  })
}

function closeImage() {
  if (!fullImg.value) return

  tween = gsap.to(fullImg.value, {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      selectedImage.value = null
    },
  })
}
onMounted(() => {
  gsap.to(mtone.value, {
    backgroundPosition: 'center 50%',
    ease: 'none',
    scrollTrigger: {
      trigger: mtone.value,
      start: 'top top',
      end: '+=100%',
      scrub: 0.5,  
    },
  })
  const splitTargets = document.querySelectorAll('[data-split]')
  splitTargets.forEach((target) => {
    const split = new SplitText(target, {
      type: 'lines',
      linesClass: 'line-parent',
    })
    gsap.set(split.lines, { yPercent: 100, opacity: 0 })
    const anim = gsap.to(split.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: 'mt-line',
      stagger: 0.08,
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
    scrollTriggers.push(anim.scrollTrigger)
  })
  AOS.init({
    offset: 200,
    easing: 'ease-out',
    once: false,    
  })
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  if (animation.value) animation.value.kill()
  if (splitInstance && splitInstance.revert) splitInstance.revert()
  scrollTriggers.forEach(trigger => trigger.kill())
  scrollTriggers = []
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="mytalent">
    <div class="mtone" ref="mtone">
      <div class="mtone__tit" data-split>
        {{ t('talent.maintit') }}
      </div>
    </div>
    <div class="mttwo">
      <div class="mttwo__tit" data-split>{{ t('talent.subtit') }}</div>
      <div class="role">
        <h2>{{ t('talent.myrole.tit') }}</h2>
        <div class="role__top">{{ t('talent.myrole.top') }}</div>
        <ul class="role__list" data-split>
          <li><p>{{ t('talent.myrole.middle[0]') }}</p></li>
          <li><p>{{ t('talent.myrole.middle[1]') }}</p></li>
          <li><p>{{ t('talent.myrole.middle[2]') }}</p></li>
          <li><p>{{ t('talent.myrole.middle[3]') }}</p></li>
          <li><p>{{ t('talent.myrole.middle[4]') }}</p></li>
        </ul>
        <div class="role__bottom">{{ t('talent.myrole.bottom') }}</div>
      </div>
      <div class="role">
        <h2>{{ t('talent.problem.tit') }}</h2>
        <div class="role__top">{{ t('talent.problem.top') }}</div>
        <ul class="role__list" data-split>
          <li><p>{{ t('talent.problem.middle[0]') }}</p></li>
          <li><p>{{ t('talent.problem.middle[1]') }}</p></li>
          <li><p>{{ t('talent.problem.middle[2]') }}</p></li>
          <li><p>{{ t('talent.problem.middle[3]') }}</p></li>
          <li><p>{{ t('talent.problem.middle[4]') }}</p></li>
        </ul>
        <div class="role__bottom">
          <div>{{ t('talent.problem.bottomtit') }}</div>
          <div>{{ t('talent.problem.bottom') }}</div>
        </div>
      </div>
      <div class="mttwo__img" data-aos="fade-right">
        <img src="@/assets/img/tf/tf_img.webp" alt="progress">
      </div>
      <div class="role">
        <h2>{{ t('talent.object.tit') }}</h2>
        <div class="role__top">{{ t('talent.object.top') }}</div>
        <ul class="role__list" data-split>
          <li><p>{{ t('talent.object.middle[0]') }}</p></li>
          <li><p>{{ t('talent.object.middle[1]') }}</p></li>
          <li><p>{{ t('talent.object.middle[2]') }}</p></li>
          <li><p>{{ t('talent.object.middle[3]') }}</p></li>
          <li><p>{{ t('talent.object.middle[4]') }}</p></li>
        </ul>
      </div>
      <div class="role">
        <h2>{{ t('talent.solution.tit') }}</h2>
        <ul class="role__list" data-split>
          <li><p>{{ t('talent.solution.middle[0]') }}</p></li>
          <li><p>{{ t('talent.solution.middle[1]') }}</p></li>
          <li><p>{{ t('talent.solution.middle[2]') }}</p></li>
          <li><p>{{ t('talent.solution.middle[3]') }}</p></li>
          <li><p>{{ t('talent.solution.middle[4]') }}</p></li>
        </ul>
        <div class="role__bottom">
          <div>{{ t('talent.solution.bottom') }}</div>
        </div>
      </div>
    </div>
    <div class="mtthr">
      <ul class="mtthr__img">
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="500"><img src="@/assets/img/tf/tf_01.webp" alt="my talent image"></li>
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900"><img src="@/assets/img/tf/tf_02.webp" alt="my talent image"></li>
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300"><img src="@/assets/img/tf/tf_03.webp" alt="my talent image"></li>
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1700"><img src="@/assets/img/tf/tf_04.webp" alt="my talent image"></li>
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2100"><img src="@/assets/img/tf/tf_05.webp" alt="my talent image"></li>
        <li data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500"><img src="@/assets/img/tf/tf_06.webp" alt="my talent image"></li>
      </ul>
    </div>
    <div class="mtfour">
      <div class="appro">
        <h2>{{ t('talent.approach.tit') }}</h2>
        <div class="appro__top">{{ t('talent.approach.top') }}</div>
        <ol>
          <li class="appro__thead">
            <h3>{{ t('talent.approach.middle.stage.headone') }}</h3>
            <ul class="appro__tbody">
              <li><p>{{ t('talent.approach.middle.stage.bodyone[0]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodyone[1]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodyone[2]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodyone[3]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodyone[4]') }}</p></li>
            </ul>
          </li>
          <li class="appro__thead">
            <h3>{{ t('talent.approach.middle.stage.headtwo') }}</h3>
            <ul class="appro__tbody">
              <li><p>{{ t('talent.approach.middle.stage.bodytwo[0]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodytwo[1]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodytwo[2]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodytwo[3]') }}</p></li>
              <li><p>{{ t('talent.approach.middle.stage.bodytwo[4]') }}</p></li>
            </ul>
          </li>
        </ol>
        <div class="appro__bottom">{{ t('talent.approach.bottom') }}</div>
      </div>
      <div class="appro">
        <h2>{{ t('talent.ia.one.tit') }}</h2>
        <div class="appro_content">{{ t('talent.ia.one.txt') }}</div>
      </div>
      <div class="appro">
        <h2>{{ t('talent.ia.two.tit') }}</h2>
        <div class="appro_content">{{ t('talent.ia.two.txt') }}</div>
      </div>
      <div class="appro">
        <h2>{{ t('talent.ia.three.tit') }}</h2>
      </div>
    </div>
    <div class="mtfive">
      <ul>
        <li v-for="(img, index) in images" :key="index">
          <img
            :src="img"
            alt="thumbnail"
            class="thumb"
            @click="openImage($event, img)"
          />
          <div class="mt-tips">Click Image 100%</div>
        </li>
      </ul>
      <div v-if="selectedImage" class="overlay" @click="closeImage">
        <img ref="fullImg" :src="selectedImage" alt="full" class="full-image" />
      </div>
    </div>
    <div class="mtsix">
      <div class="mtsix__design">
        <h2>{{ t('talent.ia.four.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.ia.four.txt') }}</div>
      </div>
      <div class="mtsix__design">
        <img src="@/assets/img/tf/tf_11.webp" alt="my talent logo">
        <h2>{{ t('talent.design.one.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.one.txt') }}</div>
      </div>
      <div class="mtsix__design">
        <ol class="mtsix__color">
          <li class="c1"></li>
          <li class="c2"></li>
          <li class="c3"></li>
          <li class="c4"></li>
          <li class="c5"></li>
          <li class="c6"></li>
        </ol>
        <h2>{{ t('talent.design.two.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.two.txt') }}</div>
      </div>
      <div class="mtsix__design">
        <div class="mtsix__img">
          <img src="@/assets/img/tf/tf_font.webp" alt="my talent font1">
          <img src="@/assets/img/tf/tf_fontbtn.webp" alt="my talent font2">
        </div>
        <h2>{{ t('talent.design.three.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.three.txt') }}</div>
      </div>
      <div class="mtsix__design">
        <div class="mtsix__img">
          <img src="@/assets/img/tf/tf_12.webp" alt="my talent table1">
          <img src="@/assets/img/tf/tf_13.webp" alt="my talent table2">
        </div>
        <h2>{{ t('talent.design.four.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.four.txt') }}</div>
        <ul class="mtsix__con" data-split>
          <li><p>{{ t('talent.design.four.content[0]') }}</p></li>
          <li><p>{{ t('talent.design.four.content[1]') }}</p></li>
          <li><p>{{ t('talent.design.four.content[2]') }}</p></li>
          <li><p>{{ t('talent.design.four.content[3]') }}</p></li>
        </ul>
      </div>
      <div class="mtsix__design">
        <div class="mtsix__imgs">
          <img src="@/assets/img/tf/tf_icon01.webp" alt="my talent icon" class="ic1">
          <img src="@/assets/img/tf/tf_icon02.webp" alt="my talent icon" class="ic2">
          <img src="@/assets/img/tf/tf_icon03.webp" alt="my talent icon" class="ic3">
          <img src="@/assets/img/tf/tf_icon04.webp" alt="my talent icon" class="ic4">
          <img src="@/assets/img/tf/tf_icon05.webp" alt="my talent icon" class="ic5">
          <img src="@/assets/img/tf/tf_icon06.webp" alt="my talent icon" class="ic6">
        </div>
        <div class="mtsix__pcbtn">
          <div class="mtsix__btns">
            <button class="bt1">Button1</button>
            <button class="bt2">Button2</button>
            <button class="bt3">Button3</button>
            <button class="bt4">Button4</button>
            <button class="bt5">Button5</button>
            <button class="bt6">X</button>
          </div>
          <div class="cates">
              <div>Category</div>
              <select>
                <option>One</option>
                <option>Two</option>
              </select>
          </div>
        </div>
        <h2>{{ t('talent.design.five.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.five.txt') }}</div>
      </div>
    </div>
    <div class="mtsev">
      <div class="mtsev__visual">
        <h2>{{ t('talent.design.six.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.six.txt') }}</div>
      </div>
      <div class="mtsev__img">
        <img src="@/assets/img/tf/tf_15.webp" alt="my talent wireframe">
      </div>
      <div class="mtsev__visual">
        <h2>{{ t('talent.design.seven.tit') }}</h2>
        <div class="mtsix__content">{{ t('talent.design.seven.txt') }}</div>
      </div>
    </div>
    <div class="mtfinal">
      <ol>
        <li class="mtlist">
          <div class="mtlist__box">
            <div class="bg"></div>
            <div class="mtlist__tit">
              <div class="number">1</div>
              <div class="title">
                <h4>Talent Fair</h4>
                <div>{{ t('talent.view.one') }}</div>
              </div>
            </div>
          </div>
          <ul class="mtlist__img">
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100"><img src="@/assets/img/tf/tf_02.webp" alt="my talent view1"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"><img src="@/assets/img/tf/tf_16.webp" alt="my talent view2"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900"><img src="@/assets/img/tf/tf_17.webp" alt="my talent view3"></li>
          </ul>
        </li>
        <li class="mtlist">
          <div class="mtlist__box">
            <div class="bg"></div>
            <div class="mtlist__tit">
              <div class="number">2</div>
              <div class="title">
                <h4>My Talent</h4>
                <div>{{ t('talent.view.two') }}</div>
              </div>
            </div>
          </div>
          <ul class="mtlist__img">
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100"><img src="@/assets/img/tf/tf_03.webp" alt="my talent view4"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"><img src="@/assets/img/tf/tf_18.webp" alt="my talent view5"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900"><img src="@/assets/img/tf/tf_19.webp" alt="my talent view6"></li>
          </ul>
        </li>
        <li class="mtlist">
          <div class="mtlist__box">
            <div class="bg"></div>
            <div class="mtlist__tit">
              <div class="number">3</div>
              <div class="title">
                <h4>My Talent</h4>
                <div>{{ t('talent.view.three') }}</div>
              </div>
            </div>
          </div>
          <ul class="mtlist__img">
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100"><img src="@/assets/img/tf/tf_04.webp" alt="my talent view7"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"><img src="@/assets/img/tf/tf_20.webp" alt="my talent view8"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900"><img src="@/assets/img/tf/tf_21.webp" alt="my talent view9"></li>
          </ul>
        </li>
        <li class="mtlist">
          <div class="mtlist__box">
            <div class="bg"></div>
            <div class="mtlist__tit">
              <div class="number">4</div>
              <div class="title">
                <h4>My Talent</h4>
                <div>{{ t('talent.view.four') }}</div>
              </div>
            </div>
          </div>
          <ul class="mtlist__img">
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100"><img src="@/assets/img/tf/tf_05.webp" alt="my talent view10"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"><img src="@/assets/img/tf/tf_22.webp" alt="my talent view11"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900"><img src="@/assets/img/tf/tf_23.webp" alt="my talent view12"></li>
          </ul>
        </li>
        <li class="mtlist">
          <div class="mtlist__box">
            <div class="bg"></div>
            <div class="mtlist__tit">
              <div class="number">5</div>
              <div class="title">
                <h4>My Talent</h4>
                <div>{{ t('talent.view.five') }}</div>
              </div>
            </div>
          </div>
          <ul class="mtlist__img">
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100"><img src="@/assets/img/tf/tf_06.webp" alt="my talent view13"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"><img src="@/assets/img/tf/tf_24.webp" alt="my talent view14"></li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1900"><img src="@/assets/img/tf/tf_25.webp" alt="my talent view15"></li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
  <transition name="fade">      
    <div class="scroll-btn-group2" v-if="isScrolling">
      <button class="scroll-btn top" @click="scrollToTop"><span class="material-icons-round">expand_less</span></button>
      <button class="scroll-btn bottom" @click="scrollToBottom"><span class="material-icons-round">expand_more</span> </button>
    </div>
  </transition>
</template>


<style lang="scss">
:root {
  --font-scale: 1vw;

  --font-xxl: clamp(40px, calc(4 * var(--font-scale)), 80px);
  --font-xl:  clamp(30px, calc(3 * var(--font-scale)), 60px);
  --font-lgsix:  clamp(26px, calc(2.2 * var(--font-scale)), 36px);
  --font-lg:  clamp(20px, calc(2 * var(--font-scale)), 30px);
  --font-md:  clamp(16px, calc(1.5 * var(--font-scale)), 20px);
  --font-sm:  clamp(14px, calc(1.2 * var(--font-scale)), 16px);
}

.mytalent {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.mtone {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("@/assets/img/tf/tf_back.webp");
  background-size: cover;
  background-position: top 0;
  background-repeat: no-repeat;
  &__tit{
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: var(--font-xl);
  }
}
.mttwo {
  &__tit{
    padding: 100px 0 50px;
    font-size: var(--font-lg);
    text-align: center;
    font-weight: 500;
  }
  .role {
    h2 {
      padding: 50px 0;
      font-size: var(--font-lg);
      text-align: left;
      font-weight: 600;
    }
    &__top {
      padding-bottom: 50px;
      font-size: var(--font-md);
    }
    &__list {
      li {
        position: relative;
        padding-left: 20px;
        padding-bottom: 20px;
        font-size: var(--font-sm);
        &::before {
          position: absolute;
          display: block;
          content: '';
          clear: both;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background-color: #656EFF;
        }
      }
    }
    &__bottom {
      padding: 30px 0 30px;
      font-size: var(--font-md);
      div {
        padding: 10px 0;
      }
    }
  }
  &__img {
    img{
      width: 100%;
    }
  }
}
.mtthr {
  &__img {
    li{
      padding: 10px 0;
      img{
        width: 100%;
      }
    }
  }
}
.mtfour{
  .appro {
    h2 {
      padding: 50px 0;
      font-size: var(--font-lg);
      text-align: left;
      font-weight: 600;
    }
    &__top {
      padding-bottom: 50px;
      font-size: var(--font-md);
    }
    ol {
      display: grid;
      grid-template-columns: 30% 70%;
      gap: 5px;
    }
    &__thead {
      h3{
        border-bottom: 1px solid #000;
        padding: 10px 5px;
        font-size: var(--font-md);
      }
    }
    &__tbody {
      font-size: var(--font-sm);
      li {
        padding: 5px;
      }
    }
    &__bottom {
      padding: 30px 0 30px;
      font-size: var(--font-md);
    }
  }
}
.mtfive {
  ul {
    li{
      position: relative;
      img {width: 100%;}
  
    }
  }
}
.mtsix {
  background-color: #fff;
  &__design {
    h2 {
      padding: 50px 0;
      font-size: var(--font-lg);
      text-align: left;
      font-weight: 600;
    }
    img{
      width: 100%;
    }
  }
  &__content {
    padding-bottom: 50px;
    font-size: var(--font-sm);
  }
  &__con{
    li {
        position: relative;
        padding-left: 20px;
        padding-bottom: 20px;
        font-size: var(--font-sm);
        &::before {
          position: absolute;
          display: block;
          content: '';
          clear: both;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background-color: #656EFF;
        }
      }
  }
  &__color {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    li {
      width: 80px;
      height: 80px;
      box-shadow: inset 1px 1px 2px rgba($color: #000000, $alpha: 0.2),
                  1px 1px 2px rgba($color: #000000, $alpha: 0.2);
    }
    .c1{background-color: #74A6F7;}
    .c2{background-color: #656EFF;}
    .c3{background-color: #9674F7;}
    .c4{background-color: #000;}
    .c5{background-color: #f5f5f5;}
    .c6{background-color: #fff;}
  }
  &__btns{
    align-items: center;
    justify-items: center;
    gap: 20px;
    button {
      font-weight: 500;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);
      outline: none;
      border: none;
      transition: 0.3s ease-in-out;
      &::before {
        height: 0%;
        width: 2px;
      }
      &:active {
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                  -4px -4px 6px 0 rgba(116, 125, 136, .5), 
        inset -4px -4px 6px 0 rgba(255,255,255,.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
      }
    }
    .bt1{
      width: 100px;
      height: 40px;
      padding: 10px 25px;
      border-radius: 10px;
      background-color: #74A6F7;
      color: #fff;
    }
    .bt2{
      width: 100px;
      height: 40px;
      padding: 10px 25px;
      border-radius: 10px;
      background-color: #656EFF;
      color: #fff;
    }
    .bt3{
      width: 100px;
      height: 40px;
      padding: 10px 25px;
      border-radius: 10px;
      background-color: #9674F7;
      color: #fff;
    }
    .bt4{
      width: 100px;
      height: 40px;
      padding: 10px 25px;
      border-radius: 10px;
      background-color: #000;
      color: #fff;
    }
    .bt5{
      width: 100px;
      height: 40px;
      padding: 10px 25px;
      border-radius: 10px;
      background-color: #f5f5f5;
      color: #000;
    }
    .bt6{
      width: 22px;
      height: 22px;
      border-radius: 5px;
      color: #9674F7;
      background-color: #fff;
    }
  }
  &__pcbtn {
    .cates {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #74A6F7;
      padding: 5px;
      border-radius: 5px;
      border: none;
      margin: 20px 0px;
      div {
        color: #fff;
        padding: 5px;
      }
      select {
        height: 30px;
        border: 0 solid none;
        border-radius: 5px;
        outline: none;
        padding: 0 5px;
      }
    }
  }
  &__imgs {
    gap: 20px;
    align-items: center;
  }
}
.mtsev {
  &__visual {
    h2 {
      padding: 50px 0;
      font-size: var(--font-lg);
      text-align: left;
      font-weight: 600;
    }
  }
  &__img {
    img{width: 100%;}
  }
}
.mtfinal {
  background-image: url('@/assets/img/tf/tf_finalbg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  .mtlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__box{
      width: 100%;
      margin: 100px 0;
      position: relative;
      .bg{
        position: absolute;
        top: -10px;
        left: 20px;
        width: 100px;
        height: 55px;
        background-color: #1E4EFF;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    }
    &__tit {
      position: relative;
      width: 100%;
      min-height: 100px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 6px 3px rgba(255, 255, 255, 0.3);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.8),
          transparent,
          rgba(255, 255, 255, 0.3)
        );
      }
      .number {
        position: absolute;
        top: 0px;
        left: 60px;
        font-size: var(--font-lgsix);
        font-weight: 800;
        color: #fff;
      }
      .title {
        h4{
          font-size: var(--font-lg);
        }
      }
    }
    &__img{
      li {
        width: 100%;
        img{
          width: 100%;
          object-fit: cover;
          box-shadow: 3px 3px 8px rgba($color: #000000, $alpha: 0.2);
        }
      }
    }
  }
}
.full-image {
  width: auto;        
  height: auto;    
  max-width: 95vw;  
  max-height: 90vh; 
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}
.scroll-btn-group2 {
  position: fixed;
  right: 50px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
  .scroll-btn {
    padding: 5px 8px;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #292929;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  @media (max-width: 768px) {
    right: 20px;
    bottom: 100px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media screen and (max-width: 1023px) {
  .mtone {
    padding: 0 30px;
    background-position: center;
  }
  .mttwo, .mtfour {
    padding: 0 30px;
  }
  .mtfive {
    li {
      .mt-tips {
        display: none;
      }
    }
  }
  .mtsix {
    padding: 0 30px;
    &__btns{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }
    &__imgs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      padding: 30px 0;
      img {
        width: 30px;
      }
    }
    .cates {
      justify-self: center;
    }
  }
  .mtsev {
    &__visual {
      padding: 0 30px;
    }
  }
  .mtfinal {
    padding: 0 30px;
    .mtlist {
      &__img{
        padding-bottom: 50px;
      li {
        img{margin: 10px 0;}
      }
    }
    }
  }
}

@media screen and (min-width: 1024px) {
  .mtone {
    padding: 0 400px;
    background-position: top 0;
  }
  .mttwo, .mtfour{
    padding: 0 400px;
  }
  .mtthr {
    padding: 100px 80px;
    &__img {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 20px;
    }
  }
  .mtfive {
    ul {
      display: flex;
      gap: 20px;
      padding: 0 80px;
      li {
        width: 400px;
        border-radius: 20px;
        img{
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        .mt-tips {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 5px;
          color: #707070;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1),
            inset 0 0 6px 3px rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
  .mtsix {
    padding: 0 400px;
    &__design {
      width: 100%;
      display: flex;
      flex-direction: column;
      img{      
        align-self: center;
        width: 80%;
      }
    }
    &__img {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__pcbtn {
      display: flex;
      justify-content: space-around;
    }
    &__btns{
      display: flex;
    }
    &__imgs {
      display: flex;
      justify-content: space-around;
      padding: 30px 0;
      img {
        width: 30px;
      }
    }
  }
  .mtsev {
    &__visual {
      padding: 0 400px;
    }
  }
  .mtfinal {
    padding: 80px;
    .mtlist {
      &__box{
        width: 500px;
      }
      &__img{
        display: flex;
        gap: 20px;
        padding: 50px 0;
        li {
          width: 100%;
        }
      }
    }
  }
}
</style>