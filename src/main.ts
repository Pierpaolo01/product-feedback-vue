import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import permissions from '@/plugins/permissions'
import AuthStore from '@/store/modules/AuthStore'

import './assets/main.css'
import axios from 'axios'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5001/'

axios.defaults.headers.common.Authorization = 'Bearer '

axios.interceptors.request.use((req) => {
  // @ts-ignore
  const token = localStorage.getItem('token')
  // @ts-ignore
  req.headers.Authorization = 'Bearer ' + token
  return req
})

Vue.use(Notifications)
Vue.use(permissions)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
