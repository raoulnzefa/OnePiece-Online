import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

axios.defaults.baseURL = 'http://45.63.124.5:8889/api/private/v1/'

Vue.config.productionTip = false

Vue.prototype.$http = axios

// 通过axios请求拦截器添加token, 保证拥有访问数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
