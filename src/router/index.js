import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'AmeriTour'} // Custom data for the route
    },
    {
      path: '/Deathvalley',
      name: 'Deathvalley',
      component: () => import('../views/DeathvalleyView.vue'), // Lazy-loading
      meta: {title: 'AmeriTour - Deathvalley, California'} 
    },
    {
      path: '/Hawaii',
      name: 'Hawaii',
      component: () => import('../views/HawaiiView.vue'), // Lazy-loading
      meta: {title: 'AmeriTour - Hawaii'} 
    },
    {
      path: '/Alaska',
      name: 'Alaska',
      component: () => import('../views/AlaskaView.vue'), // Lazy-loading
      meta: {title: 'AmeriTour - Alaska'} 
    }
  ],
})

export default router
