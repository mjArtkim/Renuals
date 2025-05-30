<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n'
const isMenuVisible = ref(false);
const activeIndex = ref(null);
const menuItems = computed(() => [
  { title: t('menu.home'), link: '/', submenu: [] },
  { title: t('menu.myskill'), link: '/myskills', submenu: [] },
  {
    title: t('menu.work'),
    link: [],
    submenu: [
      { name: t('menu.thirdparty'), intro: t('menu.introducepage'), link: 'https://www.djthirdparty.com' },
      { name: t('menu.incon'), intro: t('menu.landpage'), link: 'https://icbox.io/' },
      { name: t('menu.sam'), intro: t('menu.businesspage'), link: 'http://ideartk.com/samyang/' },
      { name: t('menu.song'), intro: t('menu.introducepage'), link: 'http://ideartk.com/songjung/' },
      { name: t('menu.mou'), intro: t('menu.edupage'), link: 'http://ideartk.com/english' },
      { name: t('menu.backc'), intro: t('menu.exhibpage'), link: 'http://ideartk.com/backchun/index.html' },
    ]
  },
  {
    title: t('menu.design'),
    link: [],
    submenu: [
      { name: t('menu.other'), link: 'http://ideartk.com/portfolio/other.html' },
      // { name: t('menu.mywork'), link: 'http://ideartk.com/portfolio/mywork.html' },
    ]
  },
]);

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
function handleClick(item, index, event) {
  if (item.submenu.length > 0) {
    event.preventDefault(); // 기본 링크 막고 토글
    toggleItem(index);
  }
  // submenu가 없으면 (예: Home) → 기본 링크 이동
}
const { t, locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang
}
</script>

<template>
  <header class="header">
    <div class="lang-box">
      <button @click="changeLanguage('en')" :class="{ active: locale === 'en' }">EN</button>
      <button @click="changeLanguage('ko')" :class="{ active: locale === 'ko' }">KR</button>
    </div>
    <div>
      <button class="pf-gnb-label" @click="toggleMenu"><span class="material-icons-round" :class="{ actives: isMenuVisible }">add</span></button>
      <nav id="pf-gnb" v-show="isMenuVisible">
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="depth1"
          >
          <a
            :href="item.link"
            @click="handleClick(item, index, $event)"
            :class="{ activegnb: activeIndex === index }">
            {{ item.title }}
          </a>
            <ul v-if="activeIndex === index" class="depth2">
              <li
                v-for="(sub, subIdx) in item.submenu"
                :key="sub"
                class="depth2-item"
                :style="{ animationDelay: `${subIdx * 0.1}s` }"
              >
                <a :href="sub.link" target="_blank">
                  {{ sub.name }}<br>
                  <div class="intro-txt">{{ sub.intro }}</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  top: 0;
  right: 30px;
  z-index: 11;
}

.lang-box {
  position: absolute;
  top: 20px;
  right: 80px;
  display: flex;
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 18px;
    transition: ease-in-out 0.3s;
    font-family: 'HallymMjo';
  }
  .active {
    font-weight: 700;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ff7553fb;
    color: #fff;
  }
}
.pf-gnb-label {
    position: fixed;
    right: 100px;
    top: 85px;
    width: 70px;
    height: 70px;
    z-index: 3;
    font-size: 28px;
    span {
      font-size: 50px;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      transition: 0.2s;
  }
}
.pf-gnb-label span.actives {
  color: #333 !important;
  transform: rotate(135deg);
}

#pf-gnb {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 600px;
    height: 100%;
    padding: 150px 80px;
    background-color: #fff;
    border-left: 1px solid #eee;
    overflow: auto;
    opacity: 0;
    transform: translateX(10px);
    animation: fadeRight 0.4s ease forwards;
    a {
      color: #333;
      transition: 0.2s;
      &:hover {
        color: #ff7553fb;
      }
    }
    .depth1 {
      line-height: 2.5;
      font-size: 2em;
    }
}
.activegnb {
  color: #ff7553fb !important;
}

.depth2-item {
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeUp 0.4s ease forwards;
  padding-left: 10px;
  font-size: 0.8em;
  line-height: 2;
  &:hover > a{
    color: #ff7553fb !important;
  }
}
.intro-txt {
  font-size: 0.8em;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.multiline-text {
  white-space: pre-line;
}

@media screen and (max-width: 1200px) {
  .pf-gnb-label {
    right: 30px;
    top: 30px;
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
}

@media screen and (min-width: 768px) {

}

/* 태블릿만 768px~1023px */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .pf-gnb-label {
        right: 20px;
        top: 20px;
    }
}

/* PC부터 1024px~ */
@media screen and (min-width: 1024px) {

}

</style>