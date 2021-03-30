import React,{Component} from 'react'

import Bottom from '../../components/Bottom'

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerAction} from '../../redux/actions'

import './index.css'

class Register extends Component{
    state={
        isCode:false
    }

    goRegister=()=>{
        const phone = this.phone.value
        const code = this.code.value
        const {isCode} =this.state
        if (!phone) {
            alert("手机号码必填") 
        }
        else{
            if(!isCode) {        
                this.setState({isCode:true})
            }
            else{
                this.props.register({phone,code})
            }          
        }
    }
	render(){
        const {isCode} =this.state
        const {msg, redirectTo} = this.props.user
        // 如果redirectTo有值, 就需要重定向到指定的路由
        if(redirectTo) {
            return <Redirect to={redirectTo}/>
        }
        if(msg){
            alert(msg)
        }
		return(
			<div className="register">
                <div className="register-problem">
                    <a><i className="iconfont iconwenti"></i></a>
                </div>
                <div className="register-container">
                    <div className="register-content">
                        <div className="register-logo">           
                            <a href="//www.mi.com/index.html" target="_parent">
                                <img src={require('./images/mi-logo.png').default} alt=""/>
                            </a>
                        </div>
                        <h4 className="register-title">注册小米账号</h4>
                        <div>
                            <div className="register-box">
                                <h4>国家/地区</h4>
                                <div className="listwrap">
                                    <div className="listwrap-tits">
                                        <p>中国</p>
                                        <i className="iconfont iconjiantou"></i>
                                    </div>
                                </div>
                                <p className="register-tip">成功注册帐号后，国家/地区将不能被修改</p>
                                <h4>手机号码</h4>
                                <div className="register-phone">
                                    <div className="phone-tits">
                                        <p>+86</p>
                                        <i className="iconfont iconjiantou_xia"></i>
                                    </div>
                                    <input type="text" placeholder="请输入手机号码" ref={c=>this.phone=c}/>
                                </div>

                                <h4 className={isCode===false?"hiddenCode":""}>图形验证码</h4>
                                <div className={isCode===false?"register-verify hiddenCode":"register-verify"}>
                                    <input type="text" placeholder="图形验证码" ref={c=>this.code=c}/>
                                    <img src="" alt=""/>
                                </div>
                                <div className={isCode===false?"error-tip hiddenCode":"error-tip"}>
                                    <p>图片验证码错误</p>
                                </div>

                                <button className="register-submit" onClick={this.goRegister}>立即注册</button>  
                            </div>
                            <div className="register-confirm">
                                    <label>已阅读并同意：小米<a>用户协议</a>和<a>隐私政策</a></label>
                                </div>   
                            
                        </div>                      
                    </div>
                </div>
                <Bottom style={{background: '#F9F9F9'}}/>
            </div>
		)
	}
}

export default connect(
	state => ({user: state.user}),//映射状态
	{register:registerAction}//映射操作状态的方法
)(Register)