<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { skills } from '@/data/skillsData.js'
import { useI18n } from 'vue-i18n'
import SafariView from '@/components/Safari.vue'
const { t } = useI18n()
const navItems = ref([])
const selectedName = ref('') 
const isSafariVisible = ref(false)
const selectedSkill = computed(() => {
  return skills.design.find(item => item.name === selectedName.value) || null
})
onMounted(async () => {
  await nextTick()
  navItems.value = document.querySelectorAll('.nav-item')

  const toggleSiblingClass = (items, index, offset, className, add) => {
    const sibling = items[index + offset]
    if (sibling) sibling.classList.toggle(className, add)
  }

  navItems.value.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hover')
      toggleSiblingClass(navItems.value, index, -1, 'sibling-close', true)
      toggleSiblingClass(navItems.value, index, 1, 'sibling-close', true)
      toggleSiblingClass(navItems.value, index, -2, 'sibling-far', true)
      toggleSiblingClass(navItems.value, index, 2, 'sibling-far', true)
    })

    item.addEventListener('mouseleave', () => {
      item.classList.remove('hover')
      toggleSiblingClass(navItems.value, index, -1, 'sibling-close', false)
      toggleSiblingClass(navItems.value, index, 1, 'sibling-close', false)
      toggleSiblingClass(navItems.value, index, -2, 'sibling-far', false)
      toggleSiblingClass(navItems.value, index, 2, 'sibling-far', false)
    })
  })
})
const handleClick = (name) => {
  selectedName.value = name
  isSafariVisible.value = true
}

</script>

<template>
  <div class="cloneable">
    <div class="title-box">
      <h1>TOOL</h1>
      <div v-if="selectedName" class="tool-name">
        <SafariView 
          v-if="isSafariVisible"
          :title="selectedName"
          @close="() => { isSafariVisible = false; selectedName = '' }"
        >
          <div v-if="selectedSkill">
            <div>{{ selectedSkill.name }}</div>                
            {{ selectedSkill.content ? t(selectedSkill.content) : '' }}
          </div>
        </SafariView>
      </div>
      <h2 v-else class="tool-none">Click App</h2>
    </div>
    <div class="nav-container">
      <div class="nav-list">
        <div
          v-for="item in skills.design" 
          :key="item.id" 
          class="nav-item"
          @click="handleClick(item.name)"
        >
          <a href="#" class="nav-item__link"> 
            <img :src="item.icon" />
          </a>
          <div class="nav-item__tooltip">
            <div>{{ item.name }}</div>                
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cloneable {
  width: 100%;
  min-height: 80vh;
  position: relative;
  --font-scale: 0.08;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  .title-box {
    position: relative;
  }
  h1 {
    font-family:'GmarketSans';
    font-size: clamp(30px, calc(var(--font-scale) * 60vw), 80px);
    text-align: center;
    margin-bottom: 30px;
  }
  .tool-none{
    height: 50%;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: clamp(20px, calc(var(--font-scale) * 40vw), 50px);
    color: rgba($color: #000000, $alpha: 0.5);
  }
}
.nav-container {
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}
.nav-list {
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  font-size: 1.4vw;
}
.nav-item {
  position: relative;
  justify-content: center;
  align-items: center;
  width: 4em;
  transition: width .5s cubic-bezier(.16, 1, .3, 1);
}

.nav-item.hover {
  width: 7em;
}

.nav-item.sibling-close {
  width: 6em;
}

.nav-item.sibling-far {
  width: 5em;
}
.nav-item__link {
  z-index: 1;
  pointer-events: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: .5em;
  padding-right: .5em;
  display: flex;
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
  }
}
.nav-item__tooltip {
  z-index: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  color: #fff;
  opacity: 0;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: .1em;
  text-align: center;
  font-size: 0.7em;
  transition: transform .5s cubic-bezier(.16, 1, .3, 1), opacity .5s cubic-bezier(.16, 1, .3, 1);
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
}

.nav-item:hover .nav-item__tooltip{
	opacity: 1;
  transform: translate(-50%, -150%); 
}
@media (max-width: 880px) {
  .cloneable {
    width: 100%;
    min-height: 85vh;
    padding: 0 30px;
  }
  .title-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tool-name{
    width: 100%;
    margin-top: 100px;
  }
  .nav-container {
    width: 90%;
    overflow: auto;
    justify-content: flex-start;
    top: 70px;
    bottom: auto;
}
  .nav-list {
    align-items: flex-start;
  }
  .nav-item {
    margin: 5px;
    justify-content: center;
    align-items: center;
    width: 8em;
  }
  .nav-item.hover {
    width: 11em;
  }
  .nav-item.sibling-close {
    width: 10em;
  }
  .nav-item.sibling-far {
    width: 9em;
  }
  .nav-item:hover .nav-item__tooltip{
	opacity: 0;
}

}
@media (min-width: 881px) and (max-width: 1200px)  {
  .cloneable {
    width: 100%;
    padding: 0 30px;
  }
  .title-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tool-name{
    width: 100%;
  }
  .nav-container {
    width: 100%;
  } 
  .nav-item {
    width: 5em;
  }
  .nav-item.hover {
    width: 8em;
  }
  .nav-item.sibling-close {
    width: 7em;
  }
  .nav-item.sibling-far {
    width: 6em;
  }
}
</style>