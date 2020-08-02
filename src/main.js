import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './globalsComponents';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

import VueCarousel from 'vue-carousel';

import Vconsole from 'vconsole';
Vue.prototype.$vConsole = new Vconsole();

import ApiService from '@/common/service/api';
import DateFilter from '@/common/filter/date';
import HttpsFilter from '@/common/filter/https';
import NameFilter from '@/common/filter/name';

import '@/assets/styles/reset.css';
import '@/assets/styles/global.less';

Sentry.init({
  dsn: process.env.VUE_APP_DSN,
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
});

Vue.use(VueCarousel);

Vue.filter('date', DateFilter);
Vue.filter('https', HttpsFilter);
Vue.filter('name', NameFilter);

ApiService.init();

Vue.config.productionTip = false;
console.log(process.env);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
