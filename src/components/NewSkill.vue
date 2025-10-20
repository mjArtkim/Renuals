<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import { skills as skillsData } from '@/data/skillsData.js'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const { t } = useI18n()
const skills = reactive(skillsData)

const cardRefs = []
const activeIndex = ref(null)
const hoveredIndex = ref(null)
const isMobile = ref(false)

const handleMouseEnter = (index) => {
  if (isMobile.value) return
  hoveredIndex.value = index
  nextTick(() => {
    const inner = cardRefs[index]?.querySelector('.skill__inner')
    if (inner) {
      gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }
  })
}

const handleMouseLeave = (index) => {
  if (isMobile.value) return
  hoveredIndex.value = null
  nextTick(() => {
    const inner = cardRefs[index]?.querySelector('.skill__inner')
    if (inner) {
      gsap.to(inner, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.in' })
    }
  })
}

const handleClick = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
    hideInner(index)
  } else {
    if (activeIndex.value !== null) hideInner(activeIndex.value)
    activeIndex.value = index
    showInner(index)
  }
}

const showInner = (index) => {
  const inner = cardRefs[index]?.querySelector('.skill__inner')
  if (inner) {
    gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',  force3D: true })
  }
}

const hideInner = (index) => {
  const inner = cardRefs[index]?.querySelector('.skill__inner')
  if (inner) {
    gsap.to(inner, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.in', force3D: true })
  }
}

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 1200
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="skill">
    <h1 class="skill__tit">SKILLS</h1>
    <ol class="skill__ol">
      <li 
        v-for="(item, i) in skills.newskill" 
        :key="item.id"
        class="skill__li"
        :class="{
    hover: !isMobile && activeIndex !== i && hoveredIndex === i,
    active: isMobile && activeIndex === i
  }"
        @mouseenter="handleMouseEnter(i)"
        @mouseleave="handleMouseLeave(i)"
        @click="isMobile && handleClick(i)" 
        ref="el => cardRefs[i] = el"
      >
        <div class="skill__liflex">
          <img :src="item.img" alt="" class="skill__img"/>
          <div class="skill__name"><strong>{{ item.titleMain }}</strong> {{ item.titleSub }}</div>
        </div>
        <div class="skill__inner">
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
  margin-bottom: 30px;
  &__tit{
    font-family:'GmarketSans';
    font-size: clamp(50px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
    margin-bottom: 8%;
  }
  &__ol{
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }
  &__li{
    position: relative;
    min-width: 220px;
    height: 500px;
    background: #fff;
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
      transition: all 0.4s ease-in-out;
      transform: translate(10%, -20%) rotate(10deg) ;
      -webkit-transform: translate(10%, -20%) rotate(10deg) ;
    }
  }
  &__li.hover{
    min-width: 600px !important;
    background: transparent;
    &::before {
      transform:translate(200%, 00%) rotate(10deg) ;
      -webkit-transform:translate( 200%, 00%) rotate(10deg) ;
    }
    .skill__img {
      opacity: 0;
      transform: scale(1.3);
    }
    .skill__name {
      transform: translate(-400%, -50%) skew(-10deg) rotate(-10deg);
      -webkit-transform: translate(-400%, -50%) skew(-10deg) rotate(-10deg);
    }
    .skill__inner {
      pointer-events: auto;
      opacity: 1;
    }
    .skill__imga, .skill__tag, .skill__litit, .skill__txt{
      opacity: 1;
      transition: all 1s ease-in-out;
    }
  }
  &__liflex{
    height: 100%;
    box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.3);
  
  }
  &__name{
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    display: inline-block;
    background: #fff;
    color: #292929;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.3);
    transform: translate(-50%, -50%) skew(-10deg) rotate(-10deg);
    -webkit-transform:translate(-50%, -50%) skew(-10deg) rotate(-10deg);
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
    top: 0px;
    transform: translateY(0px);
    pointer-events: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
  }
  &__con{    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__imga{
    width: 50%;
    opacity: 0;
  }
  &__tag{
    font-size: clamp(16px, calc(var(--font-scale) * 21vw), 20px);
    font-weight: 800;
    opacity: 0;
  }
  &__txt{    
    font-size: clamp(14px, calc(var(--font-scale) * 18vw), 16px);
    opacity: 0;
  }
  &__litit{
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
  }
  &__no{
    font-size: clamp(18px, calc(var(--font-scale) * 22vw), 28px);
    font-weight: 500;
  }
  &__names{
    font-family:'GmarketSans';
    font-size: clamp(20px, calc(var(--font-scale) * 29vw), 38px);
    font-weight: 800;
  }
}

@media (max-width: 786px) {
  .skill {
    padding: 0 30px;
    &__ol{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__li{
      min-width: 220px;
      height: 150px;
      &::before {
        height: 150%;
        width: 150%;
        left: 0;
        -webkit-transform: translate(20%, -20%) rotate(130deg) ;
        transform:translate(20%, -20%) rotate(130deg) ;
      }
    }
    &__inner{ 
      transform: translateY(0px);
      padding: 15px;
    }
    &__con{    
      flex-direction: column;
      align-items: baseline;
    }
    &__name{
      width: 200px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%) skew(-10deg) rotate(-10deg) ;
      transform: translate(-50%, -50%) skew(-10deg) rotate(-10deg);
    }
    &__imga{
      margin-top: 10px;
      align-self: end;
      width: 50%;
      opacity: 0;
    }
    &__li.active{
      min-width: 300px !important;
      height: 500px;
      width: 100%;
      background: transparent;
      &::before {
        -webkit-transform:translate(200%, -20%) rotate(110deg) ;
        transform:translate(200%, -20%) rotate(110deg);
      }
      .skill__img {
        opacity: 0;
        transform: scale(1.3);
      }
      .skill__name {
        -webkit-transform:translate(-300%, -50%) skew(-10deg) rotate(-10deg);
        transform:translate(-300%, -50%) skew(-10deg) rotate(-10deg);
      }
      .skill__inner {
        pointer-events: auto;
        opacity: 1;
      }
      .skill__imga, .skill__tag, .skill__litit, .skill__txt{
        opacity: 1;
        transition: all 1s ease-in-out;
      }
    }
  }
}
@media (min-width: 787px) and (max-width: 1200px) {
  .skill {
    padding: 0 30px;
    &__ol{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__li{
      min-width: 220px;
      height: 150px;
      &::before {
        height: 350%;
        width: 200%;
        left: 0;
        -webkit-transform: translate(-5%, -20%) rotate(130deg) ;
        transform:translate(-5%, -20%) rotate(130deg) ;
      }
    }
    &__inner{ 
      transform: translateY(0px);
      padding: 20px;
    }
    &__name{
      width: 200px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%) skew(-10deg) rotate(-10deg);
      transform:translate(-50%, -50%) skew(-10deg) rotate(-10deg) ;
    }
    &__imga{
      margin-top: 10px;
      align-self: end;
      width: 50%;
      opacity: 0;
    }
    &__li.active{
      min-width: 300px !important;
      height: 500px;
      width: 100%;
      background: transparent;
      &::before {
        -webkit-transform: translate(100%, -20%)rotate(110deg);
        transform: translate(100%, -20%) rotate(110deg);
      }
      .skill__img {
        opacity: 0;
        transform: scale(1.3);
      }
      .skill__name {
        -webkit-transform:translate(-400%, -150%) skew(-10deg) rotate(-10deg);
        transform:translate(-400%, -150%) skew(-10deg) rotate(-10deg);
      }
      .skill__inner {
        pointer-events: auto;
        opacity: 1;
      }
      .skill__imga, .skill__tag, .skill__litit, .skill__txt{
        opacity: 1;
        transition: all 1s ease-in-out;
      }
    }
  }
}
@media (min-width: 1201px) and (max-width: 1600px) {
  .skill {
    padding: 0 30px;
    &__li{
      min-width: 100px;
      height: 500px;
    }
    &__name{
      width: 90%;
      padding: 10px;
    }
  }
}

</style>