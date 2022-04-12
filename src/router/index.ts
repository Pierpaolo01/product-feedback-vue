import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginOrSignup from '@/pages/LoginOrSignUp/LoginOrSignup.vue'
import SuggestionsPage from '@/pages/Suggestions/SuggestionsPage.vue'
import AuthStore from '@/store/modules/AuthStore'
import CreateSuggestion from '@/pages/CreateSuggestion/CreateSuggestion.vue'
import UpdateSuggestion from '@/pages/CreateSuggestion/UpdateSuggestion.vue'
import CommentsPage from '@/pages/Comments/CommentsPage.vue'
import authService from '@/services/authService'

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
    path: '/suggestion/:suggestion_id',
    name: 'comments',
    component: CommentsPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/update/:suggestion_id',
    name: 'update-suggestion',
    component: UpdateSuggestion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-suggestion',
    name: 'create-suggestion',
    component: CreateSuggestion,
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

router.beforeEach((to, from, next) => {
  const authenticatedUserToken = localStorage.getItem('token')
  const requiresAuthentication = to.matched.some((match) => match.meta.requiresAuth)

  let authenticatedUser
  authService.getAuthenticatedUserInfo()
    .then((res) => {
      authenticatedUser = res.data.data
      AuthStore.setAuthenticatedUser(authenticatedUser)
      next()
    })
    .catch(() => {
      console.log('something went wrong')
      next({ name: 'auth' })
    })

  // if (!authenticatedUser) next({ name: 'auth' })

  if (!authenticatedUserToken && requiresAuthentication) next({ name: 'auth' })

  next()
})

export default router
