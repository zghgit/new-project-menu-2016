
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import router from './router';
import Components from './components';
import ElementUI from 'element-ui';      // UI 组件
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue';
import './style/main.css';
import echarts from 'echarts';      // 引入echarts
Vue.prototype.$echarts = echarts;

Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(ElementUI);     // UI 组件
Vue.use(Components);   // 公共组件
let store = (Vuex)
// Vue.http.headers.common.Authorization = 'Windows^7.0^1.0.1^ABCDEFG^SIMBA';
// Vue.http.options.emulateJSON = true;
const app = new Vue({
  store,
  router,
  // ...App
  ...App
});

app.$mount('#app');

