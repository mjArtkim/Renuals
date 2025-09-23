<script setup>
import { ref, reactive, nextTick } from 'vue'
import { gsap } from 'gsap'
import { skills } from '@/data/skillsData.js'

const selectedSkill = ref(null)

const selectSkill = (skill) => {
  if (selectedSkill.value?.id === skill.id) {
    selectedSkill.value = null
  } else {
    selectedSkill.value = skill
  }
}

const isOpen = ref({
  design: true,
  developer: false
})
const toggleGroup = (group) => {
  for (const key in isOpen.value) {
    if (key === group) {
      isOpen.value[key] = !isOpen.value[key]
      if (!isOpen.value[key]) selectedSkill.value = null
    } else {
      isOpen.value[key] = false
    }
  }
}
const categories = {
  design: 'DESIGN',
  developer: 'DEVELOPER'
}
const selectedCategory = ref('design')
const selectedSkillm = ref(null)
const isCategoryOpen = ref(false)
const isSkillOpen = ref(false)

const skillRefs = ref([])
const categoryRefs = ref([])
const toggleSkillDropdown = async () => {
  isSkillOpen.value = !isSkillOpen.value
  await nextTick()
  const elements = skillRefs.value
  if (isSkillOpen.value) {
    gsap.set(elements, { y: -20, opacity: 0 })
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    })
  } else {
    gsap.to(elements, { opacity: 0, stagger: 0.05, duration: 0.3, ease: 'power1.inOut' })
  }
}
const toggleCategoryDropdown = async () => {
  isCategoryOpen.value = !isCategoryOpen.value
  await nextTick()
  const elements = categoryRefs.value
  if (isCategoryOpen.value) {
    gsap.set(elements, { y: -20, opacity: 0 })
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    })
  } else {
    gsap.to(elements, { opacity: 0, stagger: 0.05, duration: 0.3, ease: 'power1.inOut' })
  }
}
const selectCategory = (key) => {
  selectedCategory.value = key
  isCategoryOpen.value = false
  selectedSkillm.value = null
  selectedSkill.value = null
}
const selectSkillm = (skill, index) => {
  selectedSkillm.value = skill
  selectedSkill.value = skill
  isSkillOpen.value = false

  const target = inputRefs.value[index]
  const tl = gsap.timeline()
  tl.to(target, { scale: 1.2, duration: 0.25 })
    .to(target, { y: 0, duration: 0.25 })
    .to(target, { scale: 1, duration: 0.25 })
    .to(target, {duration: 0.5 })
    .to(target, { opacity: 0, duration: 0.25, delay: 0.2 })
}
</script>

<template>
  <div class="pc">
    <div class="sk-box">
      <div class="sk-select">
        <div class="sk-choo">
          <div class="sk-tit">
            <h2>SKILLS</h2>
          </div>
          <ol>
            <li>
              <div @click="toggleGroup('design')" class="sk-cho-tit">
                <h3>DESIGN</h3>
                <button class="material-icons-round"> {{ isOpen.design ? 'expand_less' : 'expand_more' }}</button>
              </div>
              <transition name="expand">
              <ul v-show="isOpen.design" class="sk-lists">
                <li 
                v-for="item in skills.design" 
                :key="item.id" 
                :class="{ 'select-ac': selectedSkill?.id === item.id }" 
                class="sk-ln-list"
                @click="selectSkill(item)"  
                >
                  <div class="sk-list-txt">
                    <img :src="item.icon" />
                    <div>{{ item.name }}</div>
                  </div>
                  <div class="sk-checkbox">
                    <input 
                      type="checkbox" 
                      :id="item.id" 
                      :checked="selectedSkill?.id === item.id"
                      @change.stop="selectSkill(item)"   
                    />
                    <label :for="item.id">
                      <div class="sk-tick"></div>
                    </label>
                  </div>
                </li>
              </ul>
            </transition>
            </li>
            <li>
              <div @click="toggleGroup('developer')" class="sk-cho-tit">
                <h3>DEVELOPER</h3>
                <button class="material-icons-round"> {{ isOpen.developer ? 'expand_less' : 'expand_more' }}</button>
              </div>
              <transition name="expand">
              <ul v-show="isOpen.developer"  class="sk-lists">
                <li 
                v-for="item in skills.developer" 
                :key="item.id" 
                :class="{ 'select-ac': selectedSkill?.id === item.id }" 
                class="sk-ln-list"
                @click="selectSkill(item)"
                >
                  <div class="sk-list-txt">
                    <img :src="item.icon" />
                    <div>{{ item.name }}</div>
                  </div>
                  <div class="sk-checkbox">
                    <input 
                      type="checkbox" 
                      :id="item.id" 
                      :checked="selectedSkill?.id === item.id"
                      @change="selectSkill(item)" 
                    />
                    <label :for="item.id">
                      <div class="sk-tick"></div>
                    </label>
                  </div>
                </li>
              </ul>
              </transition>
            </li>
          </ol>
        </div>
      </div>
      <div class="sk-view" :class="{ self: selectedSkill }">
        <img v-if="selectedSkill" :src="selectedSkill.view" />
        <div v-else> Choose One</div>
      </div>
    </div>
  </div>
  <div class="mb">
    <div class="mb-sk-box">
      <div class="mb-select">
        <div class="mb-choo">
          <div class="sk-tit">
            <h2>SKILLS</h2>
          </div>
          <ol>
            <li class="sk-mb-chobox">
              <div class="mb-list-sel">
                <div class="sk-cho-tit" @click="toggleCategoryDropdown">
                  {{ categories[selectedCategory] }}
                  <span class="arrow">{{ isCategoryOpen ? '▲' : '▼' }}</span>
                </div>
                <ul v-show="isCategoryOpen" class="select-ctr">
                  <li
                    v-for="(label, key) in categories"
                    :key="key"
                    ref="categoryRefs"
                    @click="selectCategory(key)"
                  >
                    {{ label }}
                  </li>
                </ul>
              </div>
              <div class="mb-list-sel">
                <div class="sk-selected" @click="toggleSkillDropdown">
                  {{ selectedSkillm ? selectedSkillm.name : '-- Choose One --' }}
                  <span class="arrow">{{ isSkillOpen ? '▲' : '▼' }}</span>
                </div>
                <transition name="expand">
                  <ul v-show="isSkillOpen" class="mb-sk-lists">
                    <li
                      v-for="(item, index) in skills[selectedCategory]"
                      :key="item.id"
                      class="sk-ln-list"
                      ref="skillRefs"
                      @click.stop="selectSkillm(item, index)"
                    >
                      <div class="mb-sk-list-txt">
                        <img :src="item.icon" />
                        <div>{{ item.name }}</div>
                      </div>
                    </li>
                  </ul>
                </transition>
              </div>
            </li>
          </ol>
        </div>
        <div class="md-sk-view" :class="{ self: selectedSkill }">
          <picture v-if="selectedSkill">
    <!-- 700~1399px 일 때 -->
    <source
      media="(min-width: 1010px) and (max-width: 1399px)"
      :srcset="selectedSkill.view"
    />
    <!-- 그 외 해상도 -->
    <img :src="selectedSkill.mview" />
  </picture>
          <div v-else>Choose One</div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
  @media (max-width: 1400px) {
    .pc {display: none;}
    .mb {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: 1401px) {
    .pc {    
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
      width: 90%; 
    }
    .mb {display: none;}
  }
.sk-box {
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  display: grid;
  grid-template-columns: 20% 80%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background:transparent;
  backdrop-filter: blur(3px) brightness(0.9) contrast(120%) saturate(180%);
  -webkit-backdrop-filter: blur(3px) brightness(0.9) contrast(120%) saturate(180%);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 5px 5px 30px rgba(255, 255, 255, 0.1);
  .sk-select {
    color: #fff;
    height: 100%;
    .sk-tit{
      display: flex;
      align-items: center;
      h2 {
        margin-right: 20px;
        font-size: clamp(26px, 2.6vw, 60px);
      }
      div {
        font-size: clamp(16px, 1.05vw, 22px);
      }
    }
  }
  .sk-choo {
    ol{ 
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li{
        .sk-cho-tit{
          width: 100%;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          font-size: clamp(18px, 1.3vw, 36px);
          padding: 5px ;
          button {
            font-size: clamp(24px, 2vw, 38px);
            color: #fff;
          }
          &:hover {
            border-radius: 5px;
            outline: 1px solid rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
  }
}
.sk-view {
  max-width: 1000px;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  div {
    font-size: clamp(26px, 2.6vw, 60px);
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
  }
  img {width: 100%;}
}
.self {
  justify-self: end !important;
}
.sk-lists {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 520px;
}
.sk-ln-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
  padding: 0 15px;
  cursor: pointer;
  .sk-list-txt {
    display: flex;
    align-items: center;
    
    img {
      margin-right: 30px;
    }
  }
}
.select-ac {
  width: 105%;
  height: 50px;
  padding: 0 15px 0 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 5px 5px 30px rgba(255, 255, 255, 0.1);
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 550px;
  opacity: 1;
}

.sk-checkbox {
  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  input[type="checkbox"] {
    display: none;
    &:checked + label {
      background-color: #4158d0;
      background-image: linear-gradient(
        45deg,
        #2196f3 0%,
        #64b5f6 46%,
        #bbdefb 100%
      );
      box-shadow:
        rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      &::before {
        width: 0;
        height: 0;
      }
      .sk-tick:before, .sk-tick:after {
        transform: translate(0);
        opacity: 1;
      }
    }
  }
  label {
    --size: 30px;
    --shadow: calc(var(--size) * 0.07) calc(var(--size) * 0.1);
    position: relative;
    display: block;
    width: var(--size);
    height: var(--size);
    margin: 0 auto;
    background-color: #fff;
    background-image: linear-gradient(
      45deg,
      #545454 0%,
      #b3b3b3 46%,
      #ffffff 100%
    );
    border-radius: 50%;
    box-shadow: 0 var(--shadow) rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition:
      0.2s ease transform,
      0.2s ease background-color,
      0.2s ease box-shadow;
    overflow: hidden;
    z-index: 1;
    &::before{  
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      width: calc(var(--size) * 0.7);
      height: calc(var(--size) * 0.7);
      margin: 0 auto;
      background-color: #fff;
      transform: translateY(-50%);
      border-radius: 50%;
      box-shadow: inset 0 var(--shadow) rgba(255, 255, 255, 0.8);
      transition:
        0.2s ease width,
        0.2s ease height;
    }
    &:hover::before{
      width: calc(var(--size) * 0.55);
      height: calc(var(--size) * 0.55);
      box-shadow: inset 0 var(--shadow) rgba(255, 255, 255, 0.5);
    }
    &:active{
      transform: scale(0.9);
    }
  }
  .sk-tick {
    position: absolute;
    top: -1px;
    right: 0;
    left: calc(var(--size) * -0.05);
    width: calc(var(--size) * 0.6);
    height: calc(var(--size) * 0.6);
    margin: 0 auto;
    margin-left: calc(var(--size) * 0.14);
    transform: rotateZ(-40deg);
    &::before, &::after {
      content: "";
      position: absolute;
      background-color: #fff;
      border-radius: 2px;
      opacity: 0;
      transition:
        0.2s ease transform,
        0.2s ease opacity;
    }
    &::before{
      left: 0;
      bottom: 0;
      width: calc(var(--size) * 0.1);
      height: calc(var(--size) * 0.3);
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
      transform: translateY(calc(var(--size) * -0.68));
    }
    &::after {
      left: 0;
      bottom: 0;
      width: 100%;
      height: calc(var(--size) * 0.1);
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
      transform: translateX(calc(var(--size) * 0.78));
    }
  }
}
.mb-sk-box {
  padding: 20px;
  border-radius: 10px;
  width: 90vw;
  min-height: 70vh;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background:transparent;
  backdrop-filter: blur(3px) brightness(0.9) contrast(120%) saturate(180%);
  -webkit-backdrop-filter: blur(3px) brightness(0.9) contrast(120%) saturate(180%);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 5px 5px 30px rgba(255, 255, 255, 0.1);
  .mb-select {
    color: #fff;
    height: 100%;
    .sk-tit{
      display: flex;
      align-items: center;
      h2 {
        margin-right: 20px;
        font-size: clamp(26px, 2.6vw, 60px);
      }
      div {
        font-size: clamp(16px, 1.05vw, 22px);
      }
    }
    .mb-choo{
      ol {
        .sk-mb-chobox {
          display: grid;
          grid-template-columns: 38% 62%;
          margin: 10px 0;
        }
      }
    }
  }
}
.mb-list-sel {
  position: relative;
}
.select-ctr {
  position: absolute;
  top: 35px;
  background-color: #545454;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  li {
    line-height: 2;
  }
}
.mb-sk-lists {
  position: absolute;
  top: 35px;
  background-color: #545454;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  li {
    height: 58px;
    .mb-sk-list-txt {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
    }
  }
  }
}
.md-sk-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    height: 610px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(26px, 2.6vw, 60px);
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
  }
  img {
    height: 100%;
  }
}
</style>