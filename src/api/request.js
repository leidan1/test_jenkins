/**
 * @Author: xulian
 * @Date: 2019-11-07 16:13:38
 * @Last Modified by: xulian
 * @Last Modified time: 2019-11-07 16:14:06
 * @Desc: 封装axios，统一配置拦截器级错误处理的，可根据具体的需求进行修改
 */
import axios from 'axios'
const serverUrl = process.env.VUE_APP_BASE_API // 服务器地址
const request = axios.create({
  timeout: 60 * 1000,
  baseURL: serverUrl, // 如果多个服务器地址的话，可以新去掉该配置，新建文件进行配置，直接在写接口的地方调用服务器地址
  headers: {
    'Content-Type': 'application/json'
  }
})
// 请求发出拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// 请求结果拦截
request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
