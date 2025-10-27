import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Phone Website'} // Custom data for the route
    },
    {
      path: '/cyberdecks',
      name: 'cyberdecks',
      component: () => import('../views/CyberdecksView.vue'), // Lazy-loading
      meta: {title: 'Cyberdeck Section'} 
    },
    {
      path: '/linux-phones',
      name: 'linux-phones',
      component: () => import('../views/LinuxPhonesView.vue'), // Lazy-loading
      meta: {title: 'Linux Phones Section'} 
    },
    {
      path: '/lora-phones',
      name: 'lora-phones',
      component: () => import('../views/LoraPhonesView.vue'), // Lazy-loading
      meta: {title: 'Lora Phones Section'} 
    }
  ],
})

export default router
