/*
包含n个action creator
异步action
同步action
 */
import {
  AUTH_SUCCESS,
  ERROR_MSG,
} from './action-types'
import {
  reqLogin,
  reqRegister
} from '../api'

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

// 登陆异步action
export const loginAction = (user) => {

  const {username, password} = user

  // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
  if(!username) {
    return errorMsg('用户名必须指定!')
  } else if(!password) {
    return errorMsg('密码必须指定!')
  }

  return async dispatch => {
    // 发送注册的异步ajax请求
    //{code: 0/1, data: user, msg: ''}
    const response = await reqLogin(user)
    const result = response.data
    if(result.code===0) {// 成功
      console.log("data",result.data)
      // 分发授权成功的同步action
      dispatch(authSuccess(result.data))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 注册异步action
export const registerAction = (user) => {
  const {phone,code} = user
  // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
  if(!phone) {
    return errorMsg('用户名必须指定!')
  } else if(!code) {
    return errorMsg('验证码必须指定')
  }
  // 表单数据合法, 返回一个发ajax请求的异步action函数
  return async dispatch => {


    // 发送注册的异步ajax请求
    // {code: 0/1, data: user, msg: ''}
    const response = await reqRegister({phone,code})
    const result = response.data //  {code: 0/1, data: user, msg: ''}
    if(result.code===0) {// 成功
      // 分发授权成功的同步action
      dispatch(authSuccess(result.data))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

