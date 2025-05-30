import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import MySkillsView from '../views/MySkills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/myskills',
      name: 'muskills',
      component: () => import('../views/MySkills.vue'),
    },
  ],
})

export default router
