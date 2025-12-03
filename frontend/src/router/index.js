import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/keyboard-test',
    name: 'KeyboardTest',
    component: () => import('../pages/KeyboardTest.vue')
  },
  {
    path: '/typing-test',
    name: 'TypingTest',
    component: () => import('../pages/TypingTest.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/Profile.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../pages/Leaderboard.vue')
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: () => import('../pages/Challenges.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
