<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import { scrollBus }from '@/utils/scrollBus.js'
import { useI18n } from 'vue-i18n'
import { Physics2DPlugin } from "gsap/Physics2DPlugin"
import NewMainVue from '@/views/NewMain.vue'
import { defineAsyncComponent } from 'vue'

const AboutVue = defineAsyncComponent(() => import('@/components/About.vue'))
const SkillView = defineAsyncComponent(() => import('@/components/NewSkill.vue'))
const ToolView = defineAsyncComponent(() => import('@/components/Tools.vue'))
const WorksView = defineAsyncComponent(() => import('@/components/Work.vue'))
const ContactFormVue = defineAsyncComponent(() => import('@/components/ContactForm.vue'))
const NameCardVue = defineAsyncComponent(() => import('@/components/NameCard.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
gsap.registerPlugin(Physics2DPlugin);
gsap.registerPlugin(ScrollTrigger);

const { t, locale } = useI18n();
const text = ref(' WORKS');
const scrollerRef = ref(null);
let bodyScrollBar;
const isScrolling = ref(false);
let scrollTimeout = null;


onMounted(() => {
  bodyScrollBar = Scrollbar.init(scrollerRef.value, {
    damping: 0.1,
    delegateTo: document,
  });
  scrollBus.on('scrollToSection', (id) => {
    const el = document.getElementById(id)
    if (el && bodyScrollBar) {
      bodyScrollBar.scrollIntoView(el, {
        offsetTop: 0,
        alignToTop: true,
        onlyScrollIfNeeded: false,
        behavior: 'smooth'
      });
      gsap.fromTo(
        el,
        { opacity: 0.5, filter: 'brightness(1.3)'},
        {
          opacity: 1,
          filter: 'brightness(1)',
          duration: 1.5,
          ease: 'power2.out',
        }
      )
    }
  })
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
  gsap.set(".panel-text", {
    zIndex: (i, target, targets) => targets.length - i,
  });

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
    pin: true,
    start: () => "top top",
    end: () => "+=" + images.length * window.innerHeight,
    invalidateOnRefresh: true,
  });
  
  bodyScrollBar.addListener(({ offset }) => {
    isScrolling.value = offset.y > 0
  })

});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(st => st.kill());
  if (bodyScrollBar) {
    bodyScrollBar.destroy();
    scrollBus.all.clear()
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
    <section class="description" id="one">
      <NewMainVue></NewMainVue>
    </section>
    <section class="skill-view" id="first">
      <div class="sk-views">
        <AboutVue></AboutVue>
      </div>
      <div class="new-skill" id="second">
        <SkillView></SkillView>
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
    <section class="tools">
      <ToolView></ToolView>
    </section>
    <section class="works-main" id="third">
      <h1>WORKS</h1>
      <WorksView></WorksView>
    </section>
    <section class="final" id="fourth">
      <h1>CONTACT</h1>
      <div class="final-container">
        <div class="form-container">
          <ContactFormVue></ContactFormVue>
        </div>
        <div>
          <div class="sns-box">
            <NameCardVue></NameCardVue>
          </div>
        </div>
      </div>
    </section> 
    <section>
      <Footer></Footer>
    </section>
  </div>
  <transition name="fade">      
    <div class="scroll-btn-group2" v-if="isScrolling">
      <button class="scroll-btn top" @click="scrollToTop"><span class="material-icons-round">expand_less</span></button>
      <button class="scroll-btn bottom" @click="scrollToBottom"><span class="material-icons-round">expand_more</span> </button>
    </div>
  </transition>
</template>



<style scoped lang="scss">

::-webkit-scrollbar {
  display: none !important; 
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
  min-height: 100vh;
  overflow: hidden !important;
  transition: filter 0.6s ease, opacity 0.6s ease;
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



.final {
  width: 100%;
  min-height: 100vh;
  padding: 0 50px;
  --font-scale: 0.08;
  transition: filter 0.6s ease, opacity 0.6s ease;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
  h1 {
    padding: 50px 0;
    font-family:'GmarketSans';
    font-size: clamp(50px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
  }
}
.final-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 20px 0;
  }
}
.form-container {
  width: 100%;
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
.works-main {
  position: relative;
  width: 100%;
  min-height: 100vh;    
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;  
  --font-scale: 0.08;
  transition: filter 0.6s ease, opacity 0.6s ease;
  h1 {
    padding: 50px 0;
    font-family:'GmarketSans';
    font-size: clamp(60px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
  }
  @media (max-width: 880px) {
    justify-content: space-between;
    h1 {
    padding: 50px 0 30px;
  }
  }
}
.sns-box {
  display: flex;
  font-size: 10vw;
  justify-content: center;
  align-content: center;
  i {
    color: #333;  
  }
}
.scroll-btn:hover {
  background-color: #555 !important;
  color: #eee !important;
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

.skill-view {
  position: relative;
  width: 100%;
  min-height: 100vh;    
  background-color: #f1f1f1;
  transition: filter 0.6s ease, opacity 0.6s ease;
  .sk-views{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.new-skill {
  position: relative;
  width: 100%;
  min-height: 100vh;
  transition: filter 0.6s ease, opacity 0.6s ease;
}
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* 살짝 아래에서 올라오는 느낌 */
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
