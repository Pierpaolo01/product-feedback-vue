import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginOrSignup from '@/pages/LoginOrSignUp/LoginOrSignup.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: LoginOrSignup
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
