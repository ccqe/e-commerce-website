import React,{Component} from 'react'

import './index.css'

export default class Test extends Component{
	render(){
		return(
			<div className="right_nav">
                <ul>                   
                    <li><a href=""><i className="iconfont iconicon_huabanfuben"/><span>手机APP</span></a></li>
                    <li><a href=""><i className="iconfont iconiconfonticon5"/><span>个人中心</span></a></li>
                    <li><a href=""><i className="iconfont iconbuoumaotubiao46"/><span>售后服务</span></a></li>
                    <li><a href=""><i className="iconfont iconkefu"/><span>人工客服</span></a></li>
                    <li><a href=""><i className="iconfont icongouwuche1"/><span>购物车</span></a></li>
                </ul>
            </div>
		)
	}
}

