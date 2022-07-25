import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueRouter)

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
