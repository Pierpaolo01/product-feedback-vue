import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'
import axios from 'axios'
import authStore from '@/store/modules/AuthStore'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5001/'

axios.defaults.headers.common.Authorization = 'Bearer '

axios.interceptors.request.use((req) => {
  const { token } = authStore.authenticatedUserToken
  req.headers.Authorization = 'Bearer ' + token
  return req
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
