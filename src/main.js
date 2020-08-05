import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './globalsComponents';

import VueCarousel from 'vue-carousel';

import Vconsole from 'vconsole';
Vue.prototype.$vConsole = new Vconsole();

import ApiService from '@/common/service/api';
import DateFilter from '@/common/filter/date';
import HttpsFilter from '@/common/filter/https';

import '@/assets/styles/reset.css';
import '@/assets/styles/global.less';

Vue.use(VueCarousel);

Vue.filter('date', DateFilter);
Vue.filter('https', HttpsFilter);

ApiService.init();

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
