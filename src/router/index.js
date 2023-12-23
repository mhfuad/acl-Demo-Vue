import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginLayout',
      component: AuthLayout,
      children: [{
        path: '',
        name: 'login',
        component: () => import("@/views/LoginView.vue")
      }],
      beforeEnter: (to, from, next) => {
        if(store.getters['auth/authenticated']){
          return next({
            name: 'home'
          })
        }
        next()
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: AuthLayout,
      children: [{
        path: '',
        name: 'registration',
        component: () => import("@/views/RegistrationView.vue")
      }]
    },
    {
      path: '/home',
      name: 'dashboardLayout',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'home',
        component: HomeView
      }],
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'login'
          })
        }
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }],
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'login'
          })
        }
        next()
      }
    },
    {
      path: '/student',
      name: 'student',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'index',
        component: () => import('../views/student/indexView.vue')
      }],
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'login'
          })
        }
        next()
      }
    },
    {
      path: '/student-create',
      name: 'student-create',
      component: DashboardLayout,
      children: [{
        path: '',
        name: 'create',
        component: () => import('../views/student/createView.vue')
      }],
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'login'
          })
        }
        next()
      }
    }

  ]
})

export default router
