<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const isMobile = window.innerWidth <= 1200
  if (isMobile) return

  const sections = gsap.utils.toArray('.panel')

  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.container',
      pin: true,
      scrub: 0.1,
      end: '+=3000',
    },
  })

  // 초기 위치 세팅
  gsap.set('.box-1, .box-2', { y: 100 })

  // box-1 animation
  gsap.to('.box-1', {
    y: -130,
    duration: 2,
    ease: 'elastic',
    scrollTrigger: {
      trigger: '.box-1',
      containerAnimation: scrollTween,
      start: 'left center',
      toggleActions: 'play none none reset',
      id: '1',
    },
  })

  // box-2 animation
  gsap.to('.box-2', {
    y: -120,
    backgroundColor: '#1e90ff',
    ease: 'none',
    scrollTrigger: {
      trigger: '.box-2',
      containerAnimation: scrollTween,
      start: 'center 90%',
      end: 'center 20%',
      scrub: true,
      id: '2',
    },
  })

  ScrollTrigger.create({
    trigger: '.box-3',
    containerAnimation: scrollTween,
    toggleClass: 'active',
    start: 'center 60%',
    id: '3',
  })

  const triggerSections = ['red', 'gray', 'purple']
  triggerSections.forEach((cls, i) => {
    ScrollTrigger.create({
      trigger: `.${cls}`,
      containerAnimation: scrollTween,
      start: 'left 30%',
      end: i === 3 ? 'right right' : 'right 30%',
      markers: false,
      onToggle: (self) =>
      gsap.to(`.marker-${i + 1}`, {
          duration: 0.25,
          autoAlpha: self.isActive ? 1 : 0,
        }),
    })
  })
})
</script>


<template>
  <div>
    <div class="description">
      <div class="main-box">
        <h1 class="main-tit">ART WORK</h1>
        <div class="main-txt">
          <div class="cutxt">{{ t('home.picasso') }}</div>
          <div>- {{ t('home.picassofull') }} -</div>
        </div>
        <div class="scroll-down">
          <div>{{ t('home.scroll') }} </div>
          <div class="material-icons-round">keyboard_double_arrow_down</div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="panel red">
        <div class="box-1">
          <h2>{{ t('about.title') }}</h2>
          <div class="cutxt">{{ t('about.txt') }}</div>
        </div>
        <div class="side-txt" data-aos="fade-left" data-aos-delay="200">ART</div>
      </section>
      <section class="panel gray">
        <div class="box-2">Gray Section</div>
      </section>
      <section class="panel purple">
        <div class="box-3">Gray Section</div>
      </section>
    </div>
    <div class="final">

    </div>    
  </div>
</template>



<style lang="scss">
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
.main-tit {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
  font-size: 7vw;
  align-self: end !important;
  @media (max-width: 768px) {
    font-size: 14vw;
  }
}
.main-txt {
  text-align: right;
  font-size: 20px;
  align-self: center !important;
  div {
    line-height: 2;
    padding: 10px 0 0 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
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
.container {
  display: flex;
  flex-wrap: nowrap;
  width: 300vw; /* 4개 panel이면 4배 */
  height: 100vh;
  overflow: hidden;
}
.panel {
  flex: 0 0 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.box-1 {
  h2 {
    font-size: 5vw;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
    margin-bottom: 30px;
  }
  .cutxt {
    position: relative;
    font-size: 18px;
    padding-left: 30px;
    &::after {
      position: absolute;
      display: block;
      clear: both;
      content: '';
      width: 5px;
      height: 100%;
      background-color: #555;
      top: 0;
      left: 0;
    }
  }
}
.side-txt {
  position: absolute;
  bottom: 0;
  right: 30px;
  font-size: 10vw;
  font-weight: bold;
  font-family: 'GmarketSans';
  color: rgba(250, 202, 194);
  text-shadow: 0px 0px 10px #ffc9c9,
              -10px -10px 10px #ffffff;
  }
.red { 
  position: relative;
  background: #FACAC2;
  background: linear-gradient(145deg,rgba(250, 202, 194, 1) 0%, rgba(255, 255, 255, 1) 50%);
}
.gray { 
  background-image: url('@/assets/img/bg_2.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.purple { 
  background-image: url('@/assets/img/bg_3.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.green { 
  background-image: url('@/assets/img/bg_4.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.final {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  text-align: center;
  font-size: 2rem;
}
@media (max-width: 1200px) {
  .container {
    display: block;
    width: 100%;
    height: auto;
  }

  .panel {
    width: 100vw;
    height: 100vh;
  }

  .description {
    background-size: cover;
  }
  .box-1 {
    padding: 20px;
    h2 {
      font-size: 12vw;
    }
    .cutxt {
      position: relative;
      font-size: 16px;
      padding-left: 20px;
      &::after {
        width: 3px;
      }
    }
  }
  .side-txt {
    position: absolute;
    right: 20px;
    font-size: 15vw;
    }
  }
@media (min-width: 1201px) {
  .scroll-down {
    right: 45%;
    font-size: 16px;
  }
}
</style>