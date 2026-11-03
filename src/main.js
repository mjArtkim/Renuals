import './assets/main.css'
import './assets/font.css'
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ko from './localse/ko.json'
import en from './localse/en.json'
import 'pretendard/dist/web/static/pretendard.css'

const localeStorageKey = 'portfolio-locale'

function getDefaultLocale() {
  try {
    const savedLocale = localStorage.getItem(localeStorageKey)
    if (savedLocale === 'ko' || savedLocale === 'en') return savedLocale
  } catch {
    // Browser language remains the fallback when storage is unavailable.
  }
  if (typeof navigator === 'undefined') return 'en'

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  const prefersKorean = browserLanguages.some(language =>
    language?.toLowerCase().startsWith('ko')
  )

  return prefersKorean ? 'ko' : 'en'
}

const defaultLocale = getDefaultLocale()

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    ko,
    en,
  },
})

watch(
  () => i18n.global.locale.value,
  currentLocale => {
    document.documentElement.lang = currentLocale
    try {
      localStorage.setItem(localeStorageKey, currentLocale)
    } catch {
      // Language switching still works when browser storage is blocked.
    }
  },
  { immediate: true }
)

AOS.init({})
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
router.afterEach(() => {
  AOS.refresh()
})
