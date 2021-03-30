import React,{Component} from 'react'

import Bottom from '../../components/Bottom'
import './index.css'

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAction} from '../../redux/actions'

class Login extends Component{
  state = {
    loginWay:true,
  }
  changeloginWay(){
    this.setState({loginWay:!this.state.loginWay})
  }

  goLogin=(event)=>{
        event.preventDefault();
        const user={
            username:this.username.value,
            password:this.password.value
      }
      console.log("user",user)
      this.props.login(user)
  }
  render(){
    const {msg, redirectTo} = this.props.user
    // 如果redirectTo有值, 就需要重定向到指定的路由
    if(redirectTo) {
        return <Redirect to={redirectTo}/>
    }
    if(msg){
        alert(msg)
    }

    return (
      <div>
          <div className="h-panel">
            <div className="h-logo">
                <a href="//www.mi.com/index.html" target="_parent" ></a>
            </div>
          </div> 
          <div className="login">
              <div className="login-text">
                  <div className="text-nav">
                      <a href="#" className={this.state.loginWay===true? "active":""} onClick={()=>{this.changeloginWay()}}>账号登陆</a>
                      <span>|</span>
                      <a href="#" className={this.state.loginWay===false? "active":"" } onClick={()=>{this.changeloginWay()}}>扫码登陆</a>
                  </div>
                  <div className="form-content">
                      <div className={this.state.loginWay===true? "account show":"account"}>
                          <div className="text-input">
                              <form onSubmit={this.goLogin}>
                                  <input type="text" placeholder="邮箱/手机号码/小米ID" ref={c=>this.username=c} />
                                  <input type="password" placeholder="密码" ref={c=>this.password=c}/>
                                  <button type="submit">登陆</button> 
                              </form>
                              <div className="account-register">
                                  <a href="#">手机短信登录/注册</a>                        
                                  <div className="account-register-forget">
                                      <a href="#">立即注册</a>
                                      <span>|</span>
                                      <a href="#">忘记密码?</a>
                                  </div>
                              </div>
                          </div>
                          <div className="text-other">
                              <div>
                                  <div className="line"></div>
                                  <div className="other-title"><a href="#">其他方式登录</a></div>
                                  <div className="line"></div>
                              </div>
                              <div className="iconf">
                                  <a href="#" className="a-qq"><i className="qq"></i></a>
                                  <a href="#" className="a-vb"><i className="vb"></i></a>
                                  <a href="#" className="a-zb"><i className="zb"></i></a>
                                  <a href="#" className="a-vx"><i className="vx"></i></a>
                              </div> 
                          </div> 
                      </div>
                      <div className={this.state.loginWay===false? "saoma show":"saoma"}>
                          <div className="saoma-hint">
                            <p>请使用小米手机/米家等小米旗下APP扫码登录</p>
                          </div>
                          <div className="saoma-mask">
                              <img src={require('./images/saoma.png').default}/>
                          </div>
                          <div className="saoma-app">
                              <a href="#">使用</a>
                              <a href="#" className="">小米商城APP</a>
                              <a href="#">扫一扫</a>
                              <p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
                          </div>
                      </div> 
                  </div> 
              </div>    
          </div>
          <Bottom style={{background: '#fff'}}/>
      </div>
    )
  }
}

export default connect(
	state => ({user: state.user}),//映射状态
	{login:loginAction}//映射操作状态的方法
)(Login)