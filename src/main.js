import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ko from './localse/ko.json'
import en from './localse/en.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'en',
  fallbackLocale: 'ko',
  messages: {
    ko,
    en,
  },
})
AOS.init({})
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
router.afterEach(() => {
  AOS.refresh()
})
