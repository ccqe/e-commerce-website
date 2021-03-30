import React,{Component} from 'react'

import './index.css'

import {videoContent} from './data'

export default class VideoBar extends Component{
	render(){
		return(
            <div className="video con_width clearfix">
                <h1 className="list_title">视频<a href="">查看更多<i className="iconfont icon-xiangyoujiantou"></i></a></h1>
                <div className="video_con">
                    {
                        videoContent.map((item,index)=>{
                            return(
                                <div className="video_item" key={index}>
                                <div className="video_item_img">
                                    <a href="#"><img src={item.src} alt="" /></a>
                                    <p className="video_icon"><i className="iconfont icon-shipin"></i></p>
                                </div>
                                <p className="video_name"><a href="#">{item.name}</a></p>
                                <p className="video_desc">{item.desc}</p>
                            </div>
                            )
                        })                       
                    }
                </div>
            </div>

		)
	}
}