import React,{Component} from 'react'

import './index.css'

import {recommendSrc} from './data.js'

export default class SubBar extends Component{
	render(){
		return(
			<div className="recommend con_width">
                
                <div className="recommend_left">
                    <ul>
                        <li><a href="#"><i className="iconfont icon-shouji"></i><span>小米秒杀</span></a><div className="bottom_line"></div></li>
                        <li><a href="#"><i className="iconfont icon-lihe"></i><span>企业团购</span></a></li>
                        <li><a href="#"><i className="iconfont icon-Fma"></i><span>F码通道</span></a>
                        <div className="bottom_line"></div></li>
                    </ul>
                    <ul>
                        <li><a href="#"><i className="iconfont icon-shoujiqia"></i><span>米粉卡</span></a></li>
                        <li><a href="#"><i className="iconfont icon-yijiuhuanxin"></i><span>以旧换新</span></a></li>
                        <li><a href="#"><i className="iconfont icon-huafeichongzhi"></i><span>话费充值</span></a></li>
                    </ul>
                </div>
                
                <div className="recommend_right">
                    <ul>
                        {
                            recommendSrc.map((src,index)=>{
                                return(
                                    <li key={index}><a href=""><img src={src} title="" alt=""/></a></li>
                                )
                            })
                        }
                    </ul>
                </div>
		    </div>
		)
	}
}