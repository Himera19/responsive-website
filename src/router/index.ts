import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/screen-size',
      name: 'screen-size',
      component: () => import('@/views/ScreenSize.vue'),
    },
    {
      path: '/fetch-api',
      name: 'fetch-api',
      component: () => import('@/views/FetchApiView.vue'),
    },
  ],
})

if (router.currentRoute.value.name == 'home')
  router.beforeEach((to, from, next) => {
    if (to.name == 'home' && to.query.field != null) {
      next()
    }
  })

export default router
