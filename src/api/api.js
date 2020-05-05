/**
 * @Author: xulian
 * @Date: 2019-11-07 16:12:41
 * @Last Modified by: xulian
 * @Last Modified time: 2019-11-07 16:13:03
 * @Desc: 这里是统一写具体接口的地方
 */
import request from './request.js'
const user = {
  userList (params) {
    return request.get('user/list', { params })
  }
}
export default user
// 也可以采用对象的形式,也可以分模块，看具体需求
