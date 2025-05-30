<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'
import { SplitText } from "gsap/SplitText"
import Buttonvue from '@/components/Button.vue'
import NameCardVue from '@/components/NameCard.vue'

const { t, locale } = useI18n()


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
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
        <h1 class="main-tit" data-aos="zoom-out"  data-aos-duration="1000">ART WORK</h1>
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
        <div class="box-2">
          <div class="box-2-img">
            <h2>{{ t('home.past') }}</h2>
            <ul class="edu-img">
              <li data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000"><img src="@/assets/img/edu_01.png"></li>
              <li data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"><img src="@/assets/img/edu_02.png"></li>
              <li data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000"><img src="@/assets/img/edu_03.png"></li>
              <li data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000"><img src="@/assets/img/edu_04.png"></li>
              <li data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000"><img src="@/assets/img/edu_05.png"></li>
              <li data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000"><img src="@/assets/img/edu_06.png"></li>
            </ul>
          </div>
          <div class="box-2-inner pcs">
            <div>
              <h2>{{ t('education.title') }}</h2>
              <ul class="education-list">
                <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <strong>{{ t('education.schools.0.name') }}</strong>
                  <p>{{ t('education.schools.0.degree') }} / {{ t('education.schools.0.major') }}</p>
                  <p>{{ t('education.schools.0.period') }}</p>
                  <p v-if="t('education.schools.0.gpa') !== ''">GPA: {{ t('education.schools.0.gpa') }}</p>
                  <p v-if="t('education.schools.0.note') !== ''">{{ t('education.schools.0.note') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <strong>{{ t('education.schools.1.name') }}</strong>
                  <p>{{ t('education.schools.1.degree') }} / {{ t('education.schools.1.major') }}</p>
                  <p>{{ t('education.schools.1.period') }}</p>
                  <p v-if="t('education.schools.1.gpa') !== ''">GPA: {{ t('education.schools.1.gpa') }}</p>
                  <p v-if="t('education.schools.1.note') !== ''">{{ t('education.schools.1.note') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <strong>{{ t('education.schools.2.name') }}</strong>
                  <p>{{ t('education.schools.2.degree') }} / {{ t('education.schools.2.major') }}</p>
                  <p>{{ t('education.schools.2.period') }}</p>
                  <p v-if="t('education.schools.2.gpa') !== ''">GPA: {{ t('education.schools.2.gpa') }}</p>
                  <p v-if="t('education.schools.2.note') !== ''">{{ t('education.schools.2.note') }}</p>
                </li>
              </ul>
            </div>
            <div>
              <h2>{{ t('certificates.title') }}</h2>
              <ul class="certificate-list">
                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.0.name') }}</strong>
                  <p>{{ t('certificates.list.0.date') }} / {{ t('certificates.list.0.issuer') }} / {{ t('certificates.list.0.status') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.1.name') }}</strong>
                  <p>{{ t('certificates.list.1.date') }} / {{ t('certificates.list.1.issuer') }} / {{ t('certificates.list.1.status') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.2.name') }}</strong>
                  <p>{{ t('certificates.list.2.date') }} / {{ t('certificates.list.2.issuer') }} / {{ t('certificates.list.2.status') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="grays mobiles">
        <div class="box-2">
          <div class="box-2-inner">
            <div>
              <h2>{{ t('education.title') }}</h2>
              <ul class="education-list">
                <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <strong>{{ t('education.schools.0.name') }}</strong>
                  <p>{{ t('education.schools.0.degree') }} / {{ t('education.schools.0.major') }}</p>
                  <p>{{ t('education.schools.0.period') }}</p>
                  <p v-if="t('education.schools.0.gpa') !== ''">GPA: {{ t('education.schools.0.gpa') }}</p>
                  <p v-if="t('education.schools.0.note') !== ''">{{ t('education.schools.0.note') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <strong>{{ t('education.schools.1.name') }}</strong>
                  <p>{{ t('education.schools.1.degree') }} / {{ t('education.schools.1.major') }}</p>
                  <p>{{ t('education.schools.1.period') }}</p>
                  <p v-if="t('education.schools.1.gpa') !== ''">GPA: {{ t('education.schools.1.gpa') }}</p>
                  <p v-if="t('education.schools.1.note') !== ''">{{ t('education.schools.1.note') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <strong>{{ t('education.schools.2.name') }}</strong>
                  <p>{{ t('education.schools.2.degree') }} / {{ t('education.schools.2.major') }}</p>
                  <p>{{ t('education.schools.2.period') }}</p>
                  <p v-if="t('education.schools.2.gpa') !== ''">GPA: {{ t('education.schools.2.gpa') }}</p>
                  <p v-if="t('education.schools.2.note') !== ''">{{ t('education.schools.2.note') }}</p>
                </li>
              </ul>
            </div>
            <div>
              <h2>{{ t('certificates.title') }}</h2>
              <ul class="certificate-list">
                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.0.name') }}</strong>
                  <p>{{ t('certificates.list.0.date') }} / {{ t('certificates.list.0.issuer') }} / {{ t('certificates.list.0.status') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.1.name') }}</strong>
                  <p>{{ t('certificates.list.1.date') }} / {{ t('certificates.list.1.issuer') }} / {{ t('certificates.list.1.status') }}</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
                  <strong>{{ t('certificates.list.2.name') }}</strong>
                  <p>{{ t('certificates.list.2.date') }} / {{ t('certificates.list.2.issuer') }} / {{ t('certificates.list.2.status') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="panel purple">
        <div>
          <h2 class="ex-tit">{{ t('about.expre') }}</h2>
          <div class="box-3">
            <div class="box-3-inner">
              <ul>
                <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" class="bold">{{ t('about.sextxt.tit') }}</li>
                <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">{{ t('about.sextxt.part') }}</li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" class="bold">{{ t('about.sextxt.date') }}</li>
                <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">{{ t('about.sextxt.dateday') }}</li>
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" class="bold">{{ t('about.sextxt.positit') }}</li>
                <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">{{ t('about.sextxt.position') }}</li>
                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" class="bold">{{ t('about.sextxt.respontit') }}</li>
                <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1200" class="cutxt">{{ t('about.sextxt.respons') }}</li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" class="bold">{{ t('about.sextxt.keyachtit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1200" class="cutxt">{{ t('about.sextxt.keyach') }}</li>
                <li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1200" class="bold">{{ t('about.sextxt.techstit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1200">{{ t('about.sextxt.techstack') }}</li>
              </ul>
            </div>
            <div class="box-3-inner pcs">
              <ul>
                <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1300" class="bold">{{ t('about.wextxt.tit') }}</li>
                <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1300">{{ t('about.wextxt.part') }}</li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1300" class="bold">{{ t('about.wextxt.date') }}</li>
                <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1300">{{ t('about.wextxt.dateday') }}</li>
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1300" class="bold">{{ t('about.wextxt.positit') }}</li>
                <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1300">{{ t('about.wextxt.position') }}</li>
                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1300" class="bold">{{ t('about.wextxt.respontit') }}</li>
                <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1300" class="cutxt">{{ t('about.wextxt.respons') }}</li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1300" class="bold">{{ t('about.wextxt.keyachtit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1300" class="cutxt">{{ t('about.wextxt.keyach') }}</li>
                <li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1300" class="bold">{{ t('about.wextxt.techstit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1300">{{ t('about.wextxt.techstack') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="purples mobiles">
        <div>
          <div class="box-3">
            <div class="box-3-inner">
              <ul>
                <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1300" class="bold">{{ t('about.wextxt.tit') }}</li>
                <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1300">{{ t('about.wextxt.part') }}</li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1300" class="bold">{{ t('about.wextxt.date') }}</li>
                <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1300">{{ t('about.wextxt.dateday') }}</li>
                <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1300" class="bold">{{ t('about.wextxt.positit') }}</li>
                <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1300">{{ t('about.wextxt.position') }}</li>
                <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1300" class="bold">{{ t('about.wextxt.respontit') }}</li>
                <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1300" class="cutxt">{{ t('about.wextxt.respons') }}</li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1300" class="bold">{{ t('about.wextxt.keyachtit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1300" class="cutxt">{{ t('about.wextxt.keyach') }}</li>
                <li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1300" class="bold">{{ t('about.wextxt.techstit') }}</li>
                <li data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1300">{{ t('about.wextxt.techstack') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="final">
      <div class="look-more">
        {{ t('home.moreinfo') }}
      </div>
      <div id="split" class="look-move">
        {{ t('home.moveto') }}
      </div>
      <!-- <router-link to="#">
        <Buttonvue></Buttonvue>
      </router-link> -->
      <div class="sns-box">
        <NameCardVue></NameCardVue>
      </div>
    </div>    
  </div>
</template>



<style lang="scss" scoped>
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
.box-2 {
  display: flex;
  gap: 10px 50px;
}
.box-2-img {
  height: 90vh;
  img {
    width: 85%;
  }
}
.edu-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.box-2-inner {
  display: grid;
  grid-template-rows: 1.6fr 1fr;
  h2 {
    font-size: 3vw;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
  }
  ul {
    position: relative;
    font-size: 18px;
    padding-left: 30px;
    &::after {
      position: absolute;
      display: block;
      clear: both;
      content: '';
      width: 3px;
      height: 100%;
      background-color: #333;
      top: 0;
      left: 0;
    }
  }
  @media (min-width: 1201px) {
    min-width: 500px;
  }
}
.box-3 {
  display: flex;
  gap: 0 20px;
  h2 {
    font-size: 3vw;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
  }
  ul {
    position: relative;
    font-size: 18px;
    padding-left: 30px;
    &::after {
      position: absolute;
      display: block;
      clear: both;
      content: '';
      width: 3px;
      height: 100%;
      background-color: #333;
      top: 0;
      left: 0;
    }
    li {
      padding: 3px 0;
    }
  }
}
.red { 
  position: relative;
  height: 100vh;
  background: #FACAC2;
  background: linear-gradient(145deg,rgba(250, 202, 194, 1) 0%, rgba(255, 255, 255, 1) 50%);
}
.gray { 
  height: 100vh;
  background-image: url('@/assets/img/bg_2.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.purple { 
  height: 100vh;
  background-image: url('@/assets/img/bg_3.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.ex-tit {
  font-size: 3vw;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
  padding-bottom: 20px;
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
@media (max-width: 1200px) {
  .container {
    display: block;
    width: 100%;
    height: auto;
  }
  .panel {
    width: 100vw;
  }
  .red { 
  height: 100vh;}
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
  .pcs{display: none;}
  .gray {
    height: 100%;
    padding: 0 20px;
  }
  .box-2-img {
    height: 100%;
    img {
      width: 100%;
    }
    h2 {
      font-size: 30px;
    }
  }
  .grays { 
    height: 100%;
    padding: 20px;
    background-image: url('@/assets/img/bg_2.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
  }
  .box-2-inner {
    gap: 20px 0;
    h2 {
      font-size: 10vw;
    }
    .education-list, .certificate-list{
      font-size: 16px;
    }
  }
  .purple { 
    height: 100%;
    padding: 20px;
    background-image: url('@/assets/img/bg_3.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .purples { 
    height: 100%;
    padding: 20px;
    background-image: url('@/assets/img/bg_5.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .ex-tit{
    font-size: 10vw;
  }
  .final {
    padding: 0 20px;
  }
  .look-more {
    font-size: 8vw;
  }
  .look-move {
    font-size: 8vw;
  }
  
}
@media (min-width: 1201px) {
  .scroll-down {
    right: 45%;
    font-size: 16px;
  }
  .mobiles {
    display: none;
  }
  .sns-box {
    font-size: 3vw;
  i {
    
  }
  :hover {
      color: #feb6b6;
    }
}
}
</style>