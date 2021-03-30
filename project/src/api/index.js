/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax'

// 注册接口
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登陆接口
export const reqLogin = ({username, password}) => ajax('/login',{username, password}, 'POST')
// 获取状态中用户信息
export const reqUser = () => ajax('/user')