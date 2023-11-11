import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AuthLayout,
      children: [{
        path: '',
        name: 'login',
        component: () => import("@/views/LoginView.vue")
      }]
    },
    {
      path: '/home',
      name: 'home',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'home',
        component: HomeView
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'home',
        component: () => import('../views/AboutView.vue')
      }]
      
    }
  ]
})

export default router
