<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { CustomEase } from "gsap/CustomEase"

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

gsap.registerPlugin(SplitText, CustomEase)
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1")
const headingRef = ref(null)
const miniTitRef = ref(null)
const nameRef = ref(null)
const subListRef = ref(null)
const miniTxtRef = ref(null)

let currentTween = null
let currentTargets = null

const config = {
  duration: 0.8,
  stagger: 0.05,
  ease: "osmo-ease",
}

function animate(target) {
  if (!target) return

  // SplitText 처리
  const split = SplitText.create(target, {
    type: "words",
    wordsClass: "word",
  })

  gsap.fromTo(
    split.words,
    { yPercent: 50, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
    }
  )
}

onMounted(() => {
  gsap.set([headingRef.value, miniTitRef.value,  nameRef.value, subListRef.value, miniTxtRef.value], {
    opacity: 0,
  })

  document.fonts.ready.then(() => {
    const elements = [headingRef.value, miniTitRef.value,  nameRef.value, subListRef.value, miniTxtRef.value]
    elements.forEach((el, i) => {
      gsap.delayedCall(i * 0.6, () => {
        gsap.to(el, { opacity: 1, duration: 0.5 })
        animate(el)
      })
    })
  })
})
</script>

<template>
  <div class="new">
    <div class="new__container">
      <div class="new__img"></div>
      <div class="new__main">
        <div class="new__minitit" ref="miniTitRef">BASED IN SOUTH KOREA</div>
        <h1 data-split="heading" ref="headingRef" class="new__tit">CREATIVE DESIGNER</h1>
      </div>
      <div class="new__subbox">
        <h4 class="new__name" ref="nameRef">MINJI KIM</h4>
        <ul class="new__sublist" ref="subListRef">
          <li>DESIGN WORK</li>
          <li>WEB DESIGN[UI/UX]</li>
          <li>WEB DEVELOPMENT</li>
        </ul>
      </div>
      <div class="new__minitxt" ref="miniTxtRef">
        {{ t('new.maintxt') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.new {
  --width: 100%;
  height: 100%;
  width: 100%;
  font-family:'GmarketSans';
  --font-scale: 0.08; 
  &__container{
    position: relative;
    &::before{
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #fff;
      top: 15%;
      z-index: -1;
    }
    &::after{
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #fff;
      bottom: 15%;
      z-index: -1;
    }
  }
  &__img{
    position: absolute;
    top: 100px;
    width: 100%;
    height: calc(100vh - 100px);
    background-image: url('@/assets/img/new/main_shot.webp');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__main{
    position: relative;
    padding: 15% 50px 0;
    width: 100%;
  }
  &__minitit{
    text-align: right;
    letter-spacing: 0.6em;
    font-size: clamp(12px, calc(var(--font-scale) * 14vw), 22px);
    padding-right: 5px;
    overflow: hidden;
  }
  &__tit{
    position: relative;
    text-align: center;
    font-size: clamp(50px, calc(var(--font-scale) * 94vw), 150px);
    font-weight: 800;
    color: #000;
    mix-blend-mode: overlay;
    z-index: 1;
    &::before{
      position: absolute;
      content: '';
      display: block;
      width: 1px;
      height: 100vh;
      background-color: #fff;
      top: -150%;
      left: 10%;
      z-index: -1;
    }
    &::after{
      position: absolute;
      content: '';
      display: block;
      width: 1px;
      height: 100vh;
      background-color: #fff;
      top: -150%;
      right: 5%;
      z-index: -1;
    }
  }
  &__subbox{
    background-color: #fff;
    width: calc(var(--width) * 0.43);
    margin-left: 20%;
    padding: 130px 20px 20px;
  }
  &__name{
    font-size: clamp(14px, calc(var(--font-scale) * 20vw), 28px);
    padding-bottom: 50px;
  }
  &__sublist{
    font-size: clamp(14px, calc(var(--font-scale) * 19vw), 22px);
  }
  &__minitxt{
    float: right;
    width: calc(var(--width) * 0.4);
    padding: 10px 55px 0;
    font-size: 14px;
    font-weight: 300;
  }
  @media (max-width: 361px) {
    &__img{
      width: 100%;
      height: 100%;
      background-position: 90% 0% !important;
      background-size: auto 60%;
    }
  }
  @media (max-width: 520px) {

    &__img{
      width: 100%;
      height: 100%;
      background-position: 85% 0%;
      background-size: auto 60%;
    }
    &__main{
      margin: 50px 0 0;
      padding: 15% 30px 15%;
    }
    &__minitit{
      position: absolute;
      width: calc(var(--width) * 0.5);
      text-align: left;
      letter-spacing: 0.5em;
      padding-right: 0;
      padding-left: 5px;
    }
    &__tit{
      padding-top: 20%;
      text-align: left;
      &::after{
        display: none;
      }
    }
    &__subbox{
      width: calc(var(--width) * 0.8);
      margin-left: 0%;
      margin: 0 30px;
      padding: 30px 10px 10px;
    }
    &__name{
      padding-bottom: 30px;
      overflow: hidden;
    }
    &__minitxt{
      float: none;
      text-align: center;
      width: 100%;
      padding: 50px 30px 0;
      font-size: 14px;
    }
  }
}
</style>