<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import CanvasTrail from '@/components/CanvasTrail.vue';
import NameCardVue from '@/components/NameCard.vue'
import { useI18n } from 'vue-i18n'
import { SplitText } from "gsap/SplitText"
import PicassoCard from "@/components/PicassoCard.vue"

const { t, locale } = useI18n()
gsap.registerPlugin(ScrollTrigger);

const scrollerRef = ref(null);
let bodyScrollBar;

onMounted(() => {
  bodyScrollBar = Scrollbar.init(scrollerRef.value, {
    damping: 0.1,
    delegateTo: document,
  });

  // ScrollTrigger scroller proxy 설정
  ScrollTrigger.scrollerProxy(scrollerRef.value, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
    // 필요시 scrollLeft 구현 가능
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  // panels zIndex 설정
  gsap.set(".panel", {
    zIndex: (i, target, targets) => targets.length - i,
  });

  // 패널 이미지 애니메이션
  const images = gsap.utils.toArray('.panel'); // 모든 패널 선택
  images.forEach((image, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section.black",
      scroller: scrollerRef.value,
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    }
  });
  
  tl.to(image, { height: 0 });
});

  // panel-text zIndex 설정
  gsap.set(".panel-text", {
    zIndex: (i, target, targets) => targets.length - i,
  });

  // 텍스트 애니메이션
  const texts = gsap.utils.toArray(".panel-text");
  texts.forEach((text, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.black",
        scroller: scrollerRef.value,
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });
    tl
      .to(text, { duration: 0.33, opacity: 1, y: "50%" })
      .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
  });

  // section.black 고정 핀 설정
  ScrollTrigger.create({
    trigger: "section.black",
    scroller: scrollerRef.value,
    scrub: true,
    markers: false,
    pin: true,
    start: () => "top top",
    end: () => "+=" + images.length * window.innerHeight,
    invalidateOnRefresh: true,
  });

  document.fonts.ready.then(() => {
    const split = new SplitText("#split", { type: "chars" });
    const tl = gsap.timeline({ repeat: 30 });

    gsap.set("#split", { opacity: 1 });
    tl.from(split.chars, {
      duration: 1,
      y: 100,
      rotation: 90,
      opacity: 0,
      ease: "elastic",
      stagger: 0.03,
    });

    tl.to(
      split.chars,
      {
        duration: 2,
        opacity: 0,
        rotation: "random(-2000, 2000)",
        physics2D: {
          angle: "random(240, 320)",
          velocity: "random(300, 600)",
          gravity: 800,
        },
        stagger: 0.015,
      },
      3
    );
  });
});

onBeforeUnmount(() => {
  // ScrollTrigger 및 스크롤바 정리
  ScrollTrigger.getAll().forEach(st => st.kill());
  if (bodyScrollBar) {
    bodyScrollBar.destroy();
  }
});




</script>
<template>
  <div class="scroller" ref="scrollerRef">
    <section class="description">
      <CanvasTrail></CanvasTrail>
      <div class="main-box">
        <PicassoCard></PicassoCard>
        <div class="scroll-down">
          <div>{{ t('home.scroll') }} </div>
          <div class="material-icons-round">keyboard_double_arrow_down</div>
        </div>
      </div>
    </section>

    <section class="black">
      <div class="text-wrap">
        <div class="panel-text blue-text">
          <div>This is My Work</div>
        </div>

        <div class="panel-text blue-text">
          <div>{{ t('menu.thirdparty') }}</div>
          <div>{{ t('menu.introducepage') }}</div>
        </div>
        <div class="panel-text red-text">
          <div>{{ t('menu.incon') }}</div>
          <div>{{ t('menu.landpage') }}</div>
        </div>
        <div class="panel-text orange-text">
          <div>{{ t('menu.sam') }}</div>
          <div>{{ t('menu.businesspage') }}</div>
        </div>
        <div class="panel-text purple-text">
          <div>{{ t('menu.song') }}</div>
          <div>{{ t('menu.introducepage') }}</div>
        </div>
        <div class="panel-text purple-text1">
          <div>{{ t('menu.mou') }}</div>
          <div>{{ t('menu.edupage') }}</div>
        </div>
        <div class="panel-text purple-text2">
          <div>{{ t('menu.backc') }}</div>
          <div>{{ t('menu.exhibapge') }}</div>
        </div>

      </div>

      <div class="p-wrap">
        <div class="panel purple2"></div>
        <div class="panel blue"></div>
        <div class="panel red"></div>
        <div class="panel orange"></div>
        <div class="panel purple"></div>
        <div class="panel purple1"></div>
        <div class="panel purple2"></div>
      </div>
    </section>

    <div class="final">
      <div class="look-more">
        {{ t('home.moreinfo') }}
      </div>
      <div id="split" class="look-move">
        {{ t('home.moveto') }}
      </div>
      <div class="sns-box">
        <NameCardVue></NameCardVue>
      </div>
    </div> 
  </div>
</template>



<style scoped lang="scss">

.scroller {
  height: 100vh;
}
.description {
  background-image: url('@/assets/img/bg_1.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 10;
  height: 100vh;
  overflow: hidden !important;
}
.main-box {
  width: 100%;
  padding: 10%;
  height: 100vh;
  display: grid;
  
  @media (max-width: 768px) {
    padding: 20px;
    align-items: center;
    justify-items: center;
  }
}

.scroll-down {
  position: absolute;
  bottom: 40px;
  font-size: 20px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  font-weight: bold;
  color: #fff;
  animation: bounce 2s infinite;
  text-align: center;
  padding-top: 20px;
  cursor: default;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(6px);
  }
  60% {
    transform: translateY(3px);
  }
}


.orange {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  /* background-image: url('@/assets/img/bg_4.png'); */
  background-repeat: no-repeat;
  background-size: cover;
}

.text {
  color: #fff;
}

.black {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
}

.blue {
  height: 100vh;

}


.text-wrap {
  position: relative;
  overflow: hidden;
  width: 450px;
  height: 80vh;
}

.panel-text {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 900;
  text-align:center;

  transform:translateY(100%);
  opacity: 0;
}

.panel-text.blue-text {
  color: blue;
}

.panel-text.red-text {
  color: red;
}

.panel-text.purple-text {
  color: purple;
}

.panel-text.orange-text {
  color: orange;
}
.panel-text.purple-text2 { 
  color: rebeccapurple; 
  position: absolute;
  top: 200px; }
.panel-text.purple-text3 { 
  color: darkmagenta; 
  position: absolute; 
  top: 250px; 
}
.p-wrap {
  position: relative;
  overflow: hidden;
  width: 450px;
  height: 80vh;
}

.panel {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.panel._2 {
  z-index: 1;
}

.panel.blue {
  z-index: auto;
}

.panel.red {
  z-index: auto;
  background-color: red;
  background-image: none;
}

.panel.orange {
  z-index: auto;
  background-color: #cf5d00;
  background-image: none;
}

.panel.purple {
  z-index: auto;
}
.panel.purple2 {
  z-index: auto;
  background-image: url('@/assets/img/edu_05.png');
  background-size: cover;
  background-position: top center;
}
.panel.purple3 { 
  z-index: auto;
  background-color: darkmagenta; 
}



.final {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  text-align: center;
}
.look-more {
  font-size: 2.5vw;
  margin-bottom: 30px;
}
.look-move {
  font-size: 2vw;
  opacity: 0;
  margin-bottom: 30px;
}
.here-move {
  border-radius: 5px;
  padding: 10px 20px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  20px 20px 60px #ddd,
              -20px -20px 60px #ffffff;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
.sns-box {
  display: flex;
  gap: 20px;
  margin-top: 50px;
  font-size: 10vw;
  i {
    color: #333;  
  }
}
</style>