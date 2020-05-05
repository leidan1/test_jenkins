/**
 * @Author: xulian
 * @Date: 2019-11-07 16:14:27
 * @Last Modified by: xulian
 * @Last Modified time: 2019-11-07 16:15:05
 * @Desc:   统一路由配置，也可在路由守卫里面配置权限等操作，具体看业务需求而定
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router'
Vue.use(Router)
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach(() => {
})
export default router
