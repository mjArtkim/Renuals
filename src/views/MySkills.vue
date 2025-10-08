<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import NewMainVue from '@/views/NewMain.vue'
import NameCardVue from '@/components/NameCard.vue'
import ContactFormVue from '@/components/ContactForm.vue'
import { useI18n } from 'vue-i18n'
import { Physics2DPlugin } from "gsap/Physics2DPlugin"
import SkillVue from '@/components/Skill.vue'
import Footer from '@/components/Footer.vue'

const text = ref(' SKILLS')
gsap.registerPlugin(Physics2DPlugin);
const { t, locale } = useI18n()
gsap.registerPlugin(ScrollTrigger);

const scrollerRef = ref(null);
let bodyScrollBar;

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

const scrollToTop = () => {
  if (bodyScrollBar) {
    bodyScrollBar.scrollTo(0, 0, 800); 
  }
};

const scrollToBottom = () => {
  if (bodyScrollBar) {
    const maxScrollTop = bodyScrollBar.limit.y;
    bodyScrollBar.scrollTo(0, maxScrollTop, 800);
  }
};

</script>
<template>
  <div class="scroller" ref="scrollerRef">
    <section class="description" id="first">
      <NewMainVue></NewMainVue>
    </section>
    <section id="second">
      <section class="skill-view">

        <div class="sk-views">
          <SkillVue></SkillVue>
        </div>
      </section>
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
    </section>
    <div class="works" id="third">
      <div class="sk-move">
            <span v-for="n in 15" :key="n">{{ text }}</span>
          </div>
    </div>
    <div class="final" id="fourth">
      <div class="form-container">
        <ContactFormVue></ContactFormVue>
      </div>
      <div>
        <div class="look-more">
          {{ t('home.moreinfo') }}
        </div>
        <div class="look-move">
          {{ t('home.moveto') }}
        </div>
        <div class="sns-box">

          <NameCardVue></NameCardVue>
        </div>
      </div>
    </div> 
    <Footer></Footer>
    <div class="scroll-btn-group">
      <button class="scroll-btn top" @click="scrollToTop"><span class="material-icons-round">expand_less</span></button>
      <button class="scroll-btn bottom" @click="scrollToBottom"><span class="material-icons-round">expand_more</span> </button>
    </div>
    <div class="scroll-btn-group2">
      <button class="scroll-btn top" @click="scrollToTop"><span class="material-icons-round">expand_less</span></button>
      <button class="scroll-btn bottom" @click="scrollToBottom"><span class="material-icons-round">expand_more</span> </button>
    </div>
  </div>
</template>



<style scoped lang="scss">

::-webkit-scrollbar {
  display: none !important; /* Chrome, Safari, Edge */
}
.scroller {
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden !important;
}
.description {
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
  align-items: center;
  justify-items: center;
  @media (max-width: 768px) {
    padding: 20px;
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
  background-color: #202020;
  @media (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
  }
}

.blue {
  height: 100vh;

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
  color: #fff;
  .panel-move {
    color: #fff !important;
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
  color: rgb(255, 241, 83); 
  position: absolute;
  .panel-move {
    color: rgb(255, 241, 83) !important;
  }
}
.panel-text.white-text2 { 
  color: rgb(255, 255, 255); 
  position: absolute; 
  .panel-move {
    color: #fff !important;
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



.final {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #202020;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

}
.look-more {
  color: #fff;
  font-size: 2.5vw;
  margin-bottom: 30px;
}
.look-move {
  color: #fff;
  font-size: 2vw;
  margin-bottom: 30px;
}
@media (max-width: 768px) {
  .look-more {
    font-size: 7vw;
  }
  .look-move {
    font-size: 6vw;
    padding: 0 30px;
  }
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
.works {
  position: relative;
  width: 100%;
  min-height: 100vh;    
  overflow: hidden !important;
  .sk-move {
    white-space: nowrap;
    color: #202020;
    overflow: hidden !important;
    -webkit-text-stroke: 1px #eee;
    font-size: clamp(2rem, 4vw, 5vw); 
    font-weight: bold;
    text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.9);
    display: inline-block;
    animation: scroll-left 25s linear infinite;
  }
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
.scroll-btn-group {
  position: fixed;
  right: 50px;
  top: 8%;
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
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  @media (max-width: 768px) {
    right: 20px;
    top: 8%;
  }
}


.scroll-btn:hover {
  background-color: #555 !important;
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
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
}
.skill-view {
  position: relative;
  width: 100%;
  min-height: 100vh;    
  overflow: hidden !important;
  background-color: #f1f1f1;
  .sk-views{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
