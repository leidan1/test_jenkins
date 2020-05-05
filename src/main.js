import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as api from './api'

Vue.config.productionTip = false
Vue.prototype.$api = api // 注册为全局指令
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
