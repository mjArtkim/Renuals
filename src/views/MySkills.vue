<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const scrollerRef = ref(null);
let bodyScrollBar;

onMounted(() => {
  // smooth-scrollbar 초기화 (document.body 대신 scrollerRef 엘리먼트)
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
    <section class="orange">
      <div class="text">This is some text inside of a div block.</div>
    </section>

    <section class="black">
      <div class="text-wrap">
        <div class="panel-text blue-text">Blue</div>
        <div class="panel-text red-text">Red</div>
        <div class="panel-text orange-text">Orange</div>
        <div class="panel-text purple-text">Purple</div>
        <div class="panel-text purple-text1">Purple1</div>
        <div class="panel-text purple-text2">Purple2</div>
        <div class="panel-text purple-text2">Purple2</div>
      </div>

      <div class="p-wrap">
        <div class="panel blue"></div>
        <div class="panel red"></div>
        <div class="panel orange"></div>
        <div class="panel purple"></div>
        <div class="panel purple1"></div>
        <div class="panel purple2"></div>
        <div class="panel purple2"></div>
      </div>
    </section>

    <section class="blue"></section>
  </div>
</template>



<style scoped>
body,
html {
  margin: 0;
}
.scroller {
  height: 100vh;
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
  background-image: url('@/assets/img/bg_4.png');
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
  background-color: #00026d;
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
  background-image: url("../images/5ed12171d9d512cb2feead83_5.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.panel._2 {
  z-index: 1;
  background-image: url("../images/5f5a5b3515c4dd0c2c455925_110642301_938622823267359_7859124022958180678_n201.jpg");
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
  background-color: #808;
  background-image: none;
}
.purple2 { background-color: rebeccapurple; }
.purple3 { background-color: darkmagenta; }

.purple-text2 { color: rebeccapurple; position: absolute; top: 200px; }
.purple-text3 { color: darkmagenta; position: absolute; top: 250px; }
</style>