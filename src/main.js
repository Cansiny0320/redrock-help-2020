import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ApiService from '@/common/service/api'

import '@/assets/styles/reset.css'
import '@/assets/styles/global.less'



ApiService.init()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
