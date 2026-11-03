import { createRouter, createWebHistory } from 'vue-router'
import MySkillsView from '../views/MySkills.vue'
import OtherView from '../views/Other.vue'
import MyTalentView from '../views/MyTalent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dolbome',
      name: 'dolbome-uiux',
      component: () => import('../views/DolbomeUiux.vue'),
      meta: { standalone: true },
    },
    {
      path: '/djs',
      name: 'djs-detail',
      component: () => import('../views/DjsDetail.vue'),
      meta: { standalone: true },
    },
    {
      path: '/',
      name: 'home',
      component: MySkillsView,
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/Other.vue'),
    },
    {
      path: '/mytalent',
      name: 'mytalent',
      component: MyTalentView,
    },
  ],
})

export default router
