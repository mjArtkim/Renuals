import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import MySkillsView from '../views/MySkills.vue'
import OtherView from '../views/Other.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MySkillsView,
    },
    {
      path: '/myskills',
      name: 'muskills',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/Other.vue'),
    },
  ],
})

export default router
