import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

export default class Header extends Component {
    state={
        isLogin:false
    }
    componentDidMount(){
        if (this.props.username) {
            this.setState({isLogin:true})
        }
    }
	render(){
        const {isLogin} = this.state
		return(
            <div className="header">
                <div className="header_bar con_width">

                    <div className="header_nav">
                        <ul>
                            <li><a href="#">小米商城</a></li>
                            <li><a href="#">MIUI</a></li>
                            <li><a href="#">IoT</a></li>
                            <li><a href="#">云服务</a></li>
                            <li><a href="#">天星数科</a></li>
                            <li><a href="#">有品</a></li>
                            <li><a href="#">小爱开放平台</a></li>
                            <li><a href="#">企业团购</a></li>
                            <li><a href="#">资质证照</a></li>
                            <li><a href="#">协议规则</a></li>
                            <li><a href="#">下载App</a></li>
                            <li><a href="#">智能生活</a></li>
                            <li><a href="#">Select Region</a></li>
                        </ul>
                    </div>

                    <div className="header_shopcart">
                        <div className="shopcart_logo">
                            <a href="#">
                                <i className="iconfont icongouwuche1" />
                                购物车（0）	
                            </a>
                            <div className="shopcart-info">
                                <p>
                                    购物车中还没有商品，赶紧选购吧!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="user_action">
                        <ul>
                            <li className={isLogin===false?"user_content hidden":"user_content"}>
                                <Link className="user_number" to="/">{this.props.username}
                                    <i className="iconfont iconjiantoudown"/>
                                </Link>
                                <div className="user_content_info">
                                    <a href="">个人中心</a> 
                                    <a href="">评价晒单</a>
                                    <a href="">我的喜欢</a>
                                    <a href="">小米账号</a>
                                    <a href="" onClick={()=>this.props.logout}>退出账户</a>
                                </div>
                            </li>                           
                            <li className={isLogin===true?"hidden":""}><Link className="link" to="/login">登录</Link></li>
                            <li className={isLogin===true?"hidden":""}><Link className="link" to="/register">注册</Link></li>
                            <li><a href="#" className="link">消息通知</a></li>
                            <li className={isLogin===false?"hidden":""}><Link className="link" to="/">我的订单</Link></li>
                        </ul>
                    </div>
                
                </div>
            </div>

		)
	}
}