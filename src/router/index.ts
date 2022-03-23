import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginOrSignup from '@/pages/LoginOrSignUp/LoginOrSignup.vue'
import SuggestionsPage from '@/pages/Suggestions/SuggestionsPage.vue'
import AuthStore from '@/store/modules/AuthStore'
import CreateSuggestion from '@/pages/CreateSuggestion/CreateSuggestion.vue'
import UpdateSuggestion from '@/pages/CreateSuggestion/UpdateSuggestion.vue'
import CommentsPage from '@/pages/Comments/CommentsPage.vue'

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
    path: 'comments/:id',
    name: 'comments',
    component: CommentsPage
  },
  {
    path: 'update/:suggestion_id',
    name: 'update-suggestion',
    component: UpdateSuggestion
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
  const authenticatedUser = AuthStore.getAuthenticatedUserToken
  const requiresAuthentication = to.matched.some((match) => match.meta.requiresAuth)

  if (!authenticatedUser && requiresAuthentication) next({ name: 'auth' })

  next()
})

export default router
