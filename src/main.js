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

var _hmt = _hmt || [];
window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到
(function() {
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?' + 'd0c2f7f7223c9950bd91ef705b6d30ac';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})();

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
