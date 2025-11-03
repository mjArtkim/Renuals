<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import { useI18n } from 'vue-i18n'

gsap.registerPlugin(ScrollTrigger);

const { t, locale } = useI18n();
const scrollerRef = ref(null);
let bodyScrollBar;
const isScrolling = ref(false);
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

onMounted(() => {
  bodyScrollBar = Scrollbar.init(scrollerRef.value, {
    damping: 0.1,
    delegateTo: document,
  });

  ScrollTrigger.scrollerProxy(scrollerRef.value, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
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


  gsap.set(".panel", {
    zIndex: (i, target, targets) => targets.length - i,
  });

  const images = gsap.utils.toArray('.panel'); 
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

  ScrollTrigger.create({
    trigger: "section.black",
    scroller: scrollerRef.value,
    scrub: true,
    markers: false,
    // pinSpacing: false,
    pin: true,
    start: () => "top top",
    end: () => "+=" + images.length * window.innerHeight,
    invalidateOnRefresh: true,
  });

});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(st => st.kill());
  if (bodyScrollBar) {
    bodyScrollBar.destroy();
  }
});
</script>

<template>
  <div class="scroller" ref="scrollerRef">
    <section class="black">
      <div class="text-wrap">
        <div class="panel-text white-text">
          <div class="pan-tit">{{ t('menu.strengths') }}</div>
        </div>
        <div class="panel-text blue-text">
          <div class="pan-tit">{{ t('menu.endtoend') }}</div>
          <div class="pan-txt">{{ t('menu.endtoendtxt') }}</div>
        </div>
        <div class="panel-text yellow-text">
          <div class="pan-tit">{{ t('menu.usercd') }}</div>
          <div class="pan-txt">{{ t('menu.usercdtxt') }}</div>     
        </div>
        <div class="panel-text orange-text">
          <div class="pan-tit">{{ t('menu.collabo') }}</div>
          <div class="pan-txt">{{ t('menu.collabotxt') }}</div>
        </div>
        <div class="panel-text white-text2">
          <div class="pan-tit">{{ t('menu.global') }}</div>
          <div class="pan-txt">{{ t('menu.globaltxt') }}</div>    
        </div>
      </div>
      <div class="p-wrap">
        <div class="panel purple"></div>
        <div class="panel blue"></div>
        <div class="panel red"></div>
        <div class="panel orange"></div>
        <div class="panel white"></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.scroller {
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden !important;
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
  /* background-image: url('@/assets/img/bg_4.webp'); */
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
  position: relative;
  display: flex;
  height: 100vh;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: end;
  @media (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
  }
}
.blue {
  height: 100vh;
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
  text-transform: uppercase;
  padding: 0 20px;
  text-align:center;
  transform:translateY(100%);
  opacity: 0;
}

.panel-text.white-text {
  color: #292929;
  .panel-move {
    color: #292929 !important;
  }
}

.panel-text.blue-text {
  color: rgb(102, 150, 255);
  .panel-move {
    color: rgb(102, 150, 255) !important;
  }
}

.panel-text.orange-text {
  color: rgb(255, 190, 121);
  .panel-move {
    color: rgb(255, 190, 121) !important;
  }
}

.panel-text.purple-text {
  color: rgb(198, 132, 255);
  .panel-move {
    color: rgb(198, 132, 255) !important;
  }
}

.panel-text.yellow-text { 
  color: rgb(104, 203, 43); 
  position: absolute;
  .panel-move {
    color: rgb(104, 203, 43) !important;
  }
}
.panel-text.white-text2 { 
  color: #292929; 
  position: absolute; 
  .panel-move {
    color: #292929 !important;
  }
  @media (max-width: 1400px) {
    top: 0px; 
  }
}
.p-wrap {
  position: relative;
  overflow: hidden;
  width: 70%;
  height: 100vh;

  @media (max-width: 1400px) {
    width: 90%;
    height: 60vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
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
  background-position: top left;
  @media (max-width: 1400px) {
    background-position: top;   
  }
}

.panel._2 {
  z-index: 1;
}
.panel.purple {
  z-index: auto;
  background-image: url('@/assets/img/work_01.webp');
}
.panel.blue {
  z-index: auto;
  background-image: url('@/assets/img/work_06.webp');
}

.panel.red {
  z-index: auto;
  background-image: url('@/assets/img/work_03.webp');
}

.panel.orange {
  z-index: auto;
  background-image: url('@/assets/img/work_04.webp');
}


.panel.white { 
  z-index: auto;
  background-image: url('@/assets/img/work_05.webp');
}

.text-wrap {
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 100vh;
  @media (max-width: 1400px) {
    width: 90%;
    height: 40vh;
  }
}
.pan-tit {
  font-size: 30px;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 7vw;
  }
}
.pan-txt {
  font-size: 16px;
}

</style>