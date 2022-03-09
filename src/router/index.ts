import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginOrSignup from '@/pages/LoginOrSignUp/LoginOrSignup.vue'
import SuggestionsPage from '@/pages/Suggestions/SuggestionsPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/authenticate',
    name: 'auth',
    component: LoginOrSignup,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/suggestions',
    name: 'suggestions-page',
    component: SuggestionsPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: { name: 'auth' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// eslint-disable-next-line no-use-before-define
router.beforeEach((to, from, next) => {
  const authenticatedUser = false
  const requiresAuthentication = to.matched.some((route) => route.meta.requiresAuth)

  if (requiresAuthentication && !authenticatedUser) next('/authenticate')

  next()
})

export default router
