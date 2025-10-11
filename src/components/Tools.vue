<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { skills } from '@/data/skillsData.js'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const navItems = ref([])

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
</script>

<template>
  <div class="cloneable">
    <div class="nav-container">
      <div class="nav-list">
        <div
          v-for="item in skills.design" 
          :key="item.id" 
          class="nav-item"
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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  position: relative;
}
.nav-container {
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  inset: 0 0 10vh;
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
  justify-content: center;
  align-items: center;
  width: 4em;
  transition: width .5s cubic-bezier(.16, 1, .3, 1);
  position: relative;
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
  background-color: var(--color-neutral-100);
  opacity: 0;
  white-space: nowrap;
  border-radius: .25em;
  padding: .4em .5em;
  font-size: 1em;
  transition: transform .5s cubic-bezier(.16, 1, .3, 1), opacity .5s cubic-bezier(.16, 1, .3, 1);
  position: absolute;
  top: 0;
  transform: translate(0, -80%);
  font-weight: 400;
}

.nav-item:hover .nav-item__tooltip{
	opacity: 1;
  transform:translate(0px, -140%);
}
</style>