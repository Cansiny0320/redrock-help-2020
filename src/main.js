import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './globalsComponents'

import VueCarousel from 'vue-carousel';

import ApiService from '@/common/service/api'
import DateFilter from '@/common/filter/date'

import '@/assets/styles/reset.css'
import '@/assets/styles/global.less'

Vue.use(VueCarousel)

Vue.filter('date', DateFilter)

ApiService.init()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
