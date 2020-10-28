import Vue from 'vue';
import App from './App.vue';
import i18n from './locale';
import store from './store';
import router from './router';
import storage from './utils/storage';
import createComp from './utils/create';
import './styles/main.less';
import './styles/pop.less';
import './utils/antd';
import './icons';
import config from '../package.json';

Vue.config.productionTip = false;
Vue.prototype.$storage = storage;
Vue.use(createComp);

console.info(`%cv${config.version} (${new Date().toLocaleString()})`, 'color: red');

new Vue({
  i18n,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
