<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { scrollBus } from '@/utils/scrollBus.js';
import { RouterLink, RouterView } from 'vue-router';

const isMenuVisible = ref(false);
const activeIndex = ref(null);
const screenWidth = ref(window.innerWidth)
const updateWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const menuItems = computed(() => {
  const items = [
    { title: t('menu.home'), link: '/', submenu: [] },
    { title: t('menu.about'), link: '#first', submenu: [] },
    { title: t('menu.skill'), link: '#second', submenu: [] },
    {
      title: t('menu.work'),
      link: '#third',
      submenu: [
        { name: t('menu.thirdparty'), intro: t('menu.introducepage'), link: 'https://www.djthirdparty.com' },
        { name: t('menu.thp'), intro: t('menu.introducepage'), link: 'https://www.djthirdparty.com/prog' },
        { name: t('menu.incon'), intro: t('menu.landpage'), link: 'https://icbox.io/' },
        { name: t('menu.sam'), intro: t('menu.businesspage'), link: 'http://ideartk.com/samyang/' },
        { name: t('menu.song'), intro: t('menu.introducepage'), link: 'http://ideartk.com/songjung/' },
        { name: t('menu.backc'), intro: t('menu.exhibpage'), link: 'http://ideartm.com/backchun/index.html' },
        { name: t('menu.design'), intro: t('menu.other'), link: '/other' },
      ]
    },
    { title: t('menu.contact'), link: '#fourth', submenu: [] },
  ]
  if (screenWidth.value >= 1200) {
    return items.filter(item => item.title !== t('menu.home'))
  }
  return items
})

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}

function toggleItem(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}

const { t, locale } = useI18n();

function handleClick(item, index, event) {
  if (item.submenu.length > 0) {
    event.preventDefault();
    toggleItem(index);
  } else {
    event.preventDefault();
    if (item.link.startsWith('#')) {
      const targetId = item.link.replace('#', '');
      scrollBus.emit('scrollToSection', targetId);
      if (screenWidth.value < 1200) {
        isMenuVisible.value = false
      }
    } else {
      window.location.href = item.link;
      if (screenWidth.value < 1200) {
        isMenuVisible.value = false;
      }
    }
  }
}

function changeLanguage(lang) {
  locale.value = lang
}
function handleKeydown(event, index) {
  if (event.key === 'ArrowDown') {
    activeIndex.value = index
    const firstSub = document.querySelector(`#submenu-${index} a`)
    firstSub?.focus()
  }
  if (event.key === 'Escape') {
    activeIndex.value = null
  }
}
</script>

<template>
  <header class="header">
    <div class="pc-gnb">
      <div id="pc-pf-gnb">
        <router-link to="/">
          <img src="@/assets/img/new/logo.webp" alt="logo" class="logo" />
        </router-link>
        <ul class="pf-ul" role="menubar">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="depth1"
            role="none">
            <a
              :href="item.link || '#'"
              role="menuitem"
              tabindex="0"
              @keydown.enter.prevent="handleClick(item, index, $event)"
              @click="handleClick(item, index, $event)"
              :class="{ activegnb: activeIndex === index }">
              {{ item.title }}
            </a>
            <ul
              v-if="activeIndex === index"
              role="menu"
              class="depth2"
              :id="`submenu-${index}`"
            >
              <li
                v-for="(sub, subIdx) in item.submenu"
                :key="sub.link"
                role="none"
                class="depth2-item"
                :style="{ animationDelay: `${subIdx * 0.1}s` }"
              >
                <a 
                  :href="sub.link"
                  role="menuitem"
                  tabindex="0" 
                >
                  {{ sub.name }}
                  <div class="intro-txt">({{ sub.intro }})</div>
                </a>
              </li>
            </ul>
          </li>
          <li>       
            <div class="lang-box">
              <button @click="changeLanguage('en')" :class="{ active: locale === 'en' }">EN</button>
              <button @click="changeLanguage('ko')" :class="{ active: locale === 'ko' }">KR</button>
            </div>  
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile-gnb">
      <button class="pf-gnb-label" @click="toggleMenu"><span class="material-icons-round" :class="{ actives: isMenuVisible }">add</span></button>
      <div id="pf-gnb" v-show="isMenuVisible">
        <ul class="pf-ul" role="menubar">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="depth1"
            role="none">
            <a
              :href="item.link || '#'"
              role="menuitem"
              tabindex="0"
              @keydown.enter.prevent="handleClick(item, index, $event)"
              @click="handleClick(item, index, $event)"
              :class="{ activegnb: activeIndex === index }">
              {{ item.title }}
            </a>

            <ul
              v-if="activeIndex === index"
              role="menu"
              class="depth2"
              :id="`submenu-${index}`"
            >
              <li
                v-for="(sub, subIdx) in item.submenu"
                :key="sub.link"
                role="none"
                class="depth2-item"
                :style="{ animationDelay: `${subIdx * 0.1}s` }"
              >
                <a 
                  :href="sub.link"
                  role="menuitem"
                  tabindex="0" 
                >
                  <div>{{ sub.name }}</div>
                  <div class="intro-txt">- {{ sub.intro }}</div>
                </a>
              </li>
            </ul>
          </li>
          <li class="m-lang">
            <div class="m-lang-tit">  
              <div>LANGUAGE</div>
            </div>
            <div class="m-lang-box">
              <div @click="changeLanguage('en')" :class="{ active: locale === 'en' }">EN</div>
              <div @click="changeLanguage('ko')" :class="{ active: locale === 'ko' }">KR</div>
            </div>  
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  top: 0;
  right: 30px;
  z-index: 99;
}

.lang-box {
  display: flex;
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 18px;
    transition: ease-in-out 0.3s;
    color: #292929;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
  }
  .active {
    font-weight: 700;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 0px 10px 0 rgba(255, 255, 255, 0.3);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    background-color: rgba(255, 255, 255, 0.2);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    color: #fff;
  }
}
.pf-gnb-label {
    position: fixed;
    right: 100px;
    top: 10px;
    width: 70px;
    height: 70px;
    z-index: 999;
    font-size: 28px;
    span {
      font-size: 50px;
      color: #000;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      transition: 0.2s;
  }
}
.pf-gnb-label span.actives {
  color: #707070 !important;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
#pc-pf-gnb {
  position: fixed !important;
  top: 0;
  right: 0;
  width: 100%;
  padding: 30px 50px 20px;
  display: grid;
  grid-template-columns: 20% 80%;
  background-image: linear-gradient(
    -180deg,   
    rgba(241, 241, 241, 1) 0%,
    rgba(241, 241, 241, 0.7) 70%,
    rgba(241, 241, 241, 0.4) 100%
  );
  backdrop-filter: blur(3px) brightness(0.9) contrast(140%) saturate(200%);
  -webkit-backdrop-filter: blur(3px)  brightness(0.9) contrast(140%) saturate(200%);
  .pf-ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    .depth1 {
      text-align: center;
      font-size: 1.4em;
      max-width: 180px;
      .depth2 {
        .depth2-item {
          opacity: 0;
          transform: translateY(-10px);
          -webkit-transform: translateY(-10px);
          animation: fadeUp 0.4s ease forwards;
          padding-left: 10px;
          font-size: 0.8em;
          line-height: 2;
          &:hover > a{
            color: #005ffe !important;
            font-weight: 700;
          }
        }
      }
    }
  }
  
}

#pf-gnb {
  position: fixed !important;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 600px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px 40px;
  background-color: #f1f1f1;
  border-left: 1px solid #eee;
  opacity: 0;
  transform: translateX(10px);
  -webkit-transform: translateX(10px);
  animation: fadeRight 0.4s ease forwards;
  -webkit-overflow-scrolling: touch;
  .pf-ul{
    .depth1 {
      line-height: 2.6;
      font-size: 20px;
      a {
        color: #333;
        transition: 0.2s;
        &:active {
          color: #005ffe;
          font-weight: 700;
        }
      }
      .depth2 {
        .depth2-item {
          opacity: 0;
          transform: translateY(-10px);
          -webkit-transform: translateY(-10px);
          animation: fadeUp 0.4s ease forwards;
          padding-left: 10px;
          font-size: 16px;
          line-height: 2;
          a {
            display: flex;
            align-items: center;
            gap: 10px;
            .intro-txt{
              font-size: 12px;
              color: #707070;
            }
          }
          &:hover > a{
            color: #005ffe!important;
            font-weight: 700;
          }
        }
      } 
    }
  }
}
.activegnb {
  color: #005ffe !important;
  font-weight: 700;
}
.intro-txt {
  font-size: 0.8em;
}
.m-lang {
  line-height: 2.2;
  font-weight: 600;
  .m-lang-tit{
    color: #707070;
  }
  .m-lang-box {
    display: flex;
    justify-content: space-around;
    div {
      cursor: pointer;
      font-size: 24px;
      transition: ease-in-out 0.3s;
      color: #292929;
    }
    .active {
      font-weight: 700;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      box-shadow: 0 0px 10px 0 rgba(255, 255, 255, 0.3);
      backdrop-filter: blur( 6px );
      -webkit-backdrop-filter: blur( 6px );
      background-color: rgba(255, 255, 255, 0.2);
      color: #005ffe;
    }
  }
}
.pf-gnb-label {
  right: 20px;
  top: 20px;
}
.lang-box {
  top: 45px;
  right: 100px;
}
.lang-box {
  button {
    font-size: 16px;
  }
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
}
@keyframes fadeRight {
  to {
    opacity: 1;
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
}
.multiline-text {
  white-space: pre-line;
}

@media screen and (max-width: 1200px) {
  .mobile-gnb{
    display: block;
  }
  .pc-gnb{
    display: none;
  }
}
/* 태블릿만 768px~1023px */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .pf-gnb-label {
        right: 20px;
        top: 20px;
    }
}
/* PC부터 1024px~ */
@media screen and (min-width: 1201px) {
  .mobile-gnb{
    display: none;
  }
  .pc-gnb{
    display: block;
  }
}

</style>