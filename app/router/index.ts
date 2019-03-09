import Vue from 'nativescript-vue'
import VueRouter, { RouterOptions } from 'vue-router'

import Home from '@/pages/Home.vue'
import AuthTabsPage from '@/pages/AuthTabsPage.vue'

Vue.use(VueRouter)

const router = new VueRouter(<RouterOptions>{
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'auth',
      path: '/auth',
      component: AuthTabsPage
    },
    {
      path: '*', redirect: '/home'
    }
  ]
})

export default router