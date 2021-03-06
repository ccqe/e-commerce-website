/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
} from './action-types'

const initUser = {
  username: '', // 用户名
  type: '', // 用户类型
  phone:'',// 手机号
  code:'',// 验证码
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向的路由路径
}
// 产生user状态的reducer
function user(state=initUser, action) {
  const {type,data} = action
  switch (type) {
    case AUTH_SUCCESS: // data是user
      return {...data,redirectTo:'/'}
    case ERROR_MSG: // data是msg
      return {...state, msg:data}
    default:
      return state
  }
}


export default combineReducers({
  user
})
// 向外暴露的状态的结构: {user: {}, userList: [], chat: {}}

