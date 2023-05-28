import { createRouter, createWebHistory } from 'vue-router'
import LayoutBasic from '@/views/layouts/LayoutBasic.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutBasic,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: '/map',
          component: () => import('@/views/MapView.vue'),
        },
      ],
    },
  ],
})

export default router
