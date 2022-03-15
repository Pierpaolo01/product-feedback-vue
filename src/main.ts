import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5001/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
