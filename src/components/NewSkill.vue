<script setup>
import { reactive, onMounted, nextTick } from 'vue'
import { skills as skillsData } from '@/data/skillsData.js'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
const { t, locale } = useI18n()
const skills = reactive(skillsData)
// const handleMouseEnter = (index) => {
//   skills.newskill[index].isHovered = true
// }
// const handleMouseLeave = (index) => {
//   skills.newskill[index].isHovered = false
// }
const cardRefs = []
const handleMouseEnter = (index) => {
  skills.newskill[index].isHovered = true
  // GSAP 애니메이션
  nextTick(() => {
    const inner = cardRefs[index]?.querySelector('.skill__inner')
    if (inner) {
      gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }
  })
}

const handleMouseLeave = (index) => {
  skills.newskill[index].isHovered = false
  // GSAP 애니메이션
  nextTick(() => {
    const inner = cardRefs[index]?.querySelector('.skill__inner')
    if (inner) {
      gsap.to(inner, { opacity: 0, y: 0, duration: 0.5, ease: 'power2.in' })
    }
  })
}
</script>

<template>
  <div class="skill">
    <h1 class="skill__tit">SKILLS</h1>
    <ol class="skill__ol">
      <li 
        v-for="(item, i) in skills.newskill" 
        :key="item.id" class="skill__li" 
        :class="[ { hover: item.isHovered }]"
        @mouseenter="handleMouseEnter(i)"
        @mouseleave="handleMouseLeave(i)"
        ref="el => cardRefs[i] = el"
      >
        <div class="skill__liflex">
          <img :src="item.img" alt="" class="skill__img"/>
          <div class="skill__name">  <strong>{{ item.titleMain }}</strong> {{ item.titleSub }}</div>
        </div>
        <div class="skill__inner" :style="{ transform: 'translateY(20px)'}">
          <div class="skill__con">
            <ul class="skill__list">
              <li v-for="(tag, idx) in item.tags" :key="idx" class="skill__tag"># {{ tag }}</li>
            </ul>
            <img :src="item.img" alt="" class="skill__imga"/>
          </div>
          <div class="skill__txt">{{ t(item.textKey) }}</div>
          <div class="skill__litit">
              <div class="skill__no">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="skill__names">{{ item.titleMain }} {{ item.titleSub }}</div>
            </div>  
        </div>
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
.skill {
  width: 100%;
  --font-scale: 0.08;
  padding: 0 50px;
  &__tit{
    font-family:'GmarketSans';
    font-size: clamp(50px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
    margin-bottom: 8%;
  }
  &__ol{
    display: flex;
    justify-content: center;
    gap: 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  &__li{
    position: relative;
    width: 300px;
    height: 500px;
    background: transparent;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    &::before {
      position: absolute;
      height: 250%;
      width: 70%;
      top: 0;
      right: 0;
      content: '';
      background: #000;
      transition: all 0.5s ease-in-out;
      transform: rotate(10deg) translate( 0%, -20%);
    }
  }
  &__li.hover{
    width: 600px;
    &::before {
      transform: rotate(10deg) translate( 100%, -20%);
    }
    .skill__img {
      opacity: 0;
      transform: scale(1.3);
    }
    .skill__name {
      transform: translate(-200%, -50%) skew(-10deg) rotate(-10deg);
    }
    .skill__inner {
      pointer-events: auto;
      opacity: 1;
    }
  }
  &__liflex{
    height: 100%;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.3);
  
  }


  &__name{
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    display: inline-block;
    background: #000000;
    color: #fff;
    transform: skew(-10deg) rotate(-10deg) translate(-50%, -50%);
    padding: 10px 0;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-size: clamp(18px, calc(var(--font-scale) * 15vw), 28px);
    transition: all 0.4s ease-in-out;
  }
  &__img{  
    width: 100%;
    height: 100%;
    object-fit: cover; 
    opacity: 0.4;
    transition: all 0.5s ease-in-out;
  }
  &__inner{ 
    position: absolute;
    inset: 0;
    opacity: 0;
    top: -20px;
    transform: translateY(20px);
    pointer-events: none;
    padding: 20px;
  }
  &__litit{
    display: flex;
    align-items: center;
  }
  &__con{    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list{}
  &__imga{
    width: 50%;
  }
  &__tag{
    font-size: clamp(14px, calc(var(--font-scale) * 14vw), 20px);
    font-weight: 800;
  }
  &__txt{}
  &__no{}
  &__names{}
}

</style>