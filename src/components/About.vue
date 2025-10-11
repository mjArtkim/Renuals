<script setup>
import { onMounted, onBeforeUnmount, watch } from "vue"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { CustomEase } from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger)
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1")

let splitInstance = null
let tween = null
watch(locale, () => {
  if (!splitInstance) return
  splitInstance.revert()

  const sheading = document.querySelector('[data-split="sheading"]')
  sheading.innerHTML = `
  <li class="about__txt1">&quot;${t('new.abouttit')}&quot;</li>
  <li class="about__txt2">${t('new.abouttxt')}</li>
  `
  splitInstance = SplitText.create(sheading, {
    type: "chars",
    charsClass: "letter"
  })
})
onMounted(() => {
  const sheading = document.querySelector('[data-split="sheading"]')
  const scroller = document.querySelector(".scroller")
  document.fonts.ready.then(() => {
    splitInstance = SplitText.create(sheading, {
      type: "chars",
      charsClass: "letter"
    })


  const targets = sheading.querySelectorAll(".letter")

    tween = gsap.fromTo(
      targets,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.01,
        ease: "osmo-ease",
        scrollTrigger: {
          trigger: sheading,
          start: "top 80%",
          scroller: scroller, 
          toggleActions: "play none none reverse",
          once: false 
        }
      }
    )
  })
})

onBeforeUnmount(() => {
  if (tween) tween.kill()
  if (splitInstance) splitInstance.revert()
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <div class="about">
    <div>
      <div class="about__mail">
        <div class="about__ul">
          <div class="about__frs">
            <a href="mailto:mjtwins1@gmail.com">
              <i class="fa-solid fa-envelope"></i>
              <div>mjtwins1@gmail.com</div>
            </a>
          </div>
          <div class="about__sec">FEEL FREE TO REACH OUT ANYTIME</div>
        </div>
      </div>
      <h1 class="about__tit">ABOUT</h1>
      <ol class="about__txt" data-split="sheading">
        <li class="about__txt1" >&quot;{{ t('new.abouttit') }}&quot;</li>
        <li class="about__txt2">{{ t('new.abouttxt') }}</li>
      </ol> 
    </div>
    <div>
      <div class="about__im">
        <img src="@/assets/img/new/new_about.webp"/>
        <div class="about__imhi">{{ t('new.hello') }}</div>
        <div class="about__imtit">{{ t('new.im') }}</div>
        <div class="about__imex">MY EXPERIENCE</div>
        <div class="about__imtxt">{{ t('new.imtxt') }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  width: 100%;
  --font-scale: 0.08;
  &__mail {
    margin: 10% 10% 5%;
    font-size: clamp(14px, calc(var(--font-scale) * 17vw), 20px);
  }
  &__ul {
    width: 400px;
    text-align: center;
  }
  &__frs {
    font-weight: bold;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        margin: 0 5px 2px;
      }
    }
  }
  &__tit{
    font-family:'GmarketSans';
    font-size: clamp(60px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
  }
  &__txt{
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
  }
  &__txt1{
    padding: 0 20%;
    font-size: clamp(28px, calc(var(--font-scale) * 50vw), 70px);
    font-weight: 800;
  }
  &__txt2{
    padding: 0 10%;
    font-size: clamp(26px, calc(var(--font-scale) * 45vw), 60px);
    font-weight: 700;
    color: #606060;
  }
  &__im {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family:'GmarketSans';
    text-align: center;
    img{
      width: 50%;
    }
  }
  &__imhi{
    padding: 30px 0 ;
    font-size: clamp(18px, calc(var(--font-scale) * 25vw), 40px);
  }
  &__imex{
    padding-bottom: 30px;
    font-size: clamp(20px, calc(var(--font-scale) * 40vw), 40px);
    font-weight: 800;
  }
  &__imtit{
    padding-bottom: 30px;
    font-size: clamp(20px, calc(var(--font-scale) * 40vw), 40px);
  }
  &__imtxt{
    width: 50%;
    font-size: clamp(14px, calc(var(--font-scale) * 15vw), 30px);
    font-weight: 300;
  }
  @media (max-width: 800px) {
    &__im {
      img{
        width: 80%;
      }
    }
    &__imtxt{
    width: 80%;
      font-size: clamp(14px, calc(var(--font-scale) * 15vw), 30px);
      font-weight: 300;
    }
  }
  @media (max-width: 1199px) {
    &__mail {
      margin: 5% 10% 10%;
    }
    &__ul {
      width: 100%;
    }
    &__txt1{
      padding: 0 30px;
    }
    &__txt2{
      padding: 0 30px;
    }
  }
}
</style>