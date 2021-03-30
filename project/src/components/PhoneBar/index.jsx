import React,{Component} from 'react'

import './index.css'

import {phoneSubSrc,phoneGoods} from './data'

export default class PhoneBar extends Component{
	render(){
		return(       
                <div className="flashover con_width clearfix">
                    <h1 className="list_title">手机<a href="">查看更多<i className="iconfont icon-xiangyoujiantou"></i></a></h1>
                    <div className="goods_item_left1">
                        <a href="#"><img src={phoneSubSrc}/></a>
                    </div>
                    
                    <div className="goods_item_right">
                    {
                        phoneGoods.map((item,index)=>{
                            return(
                                <div className="goods_item_list" key={index}>
                                    <div className="goodlist_content">
                                        <a href="#"><img src={item.src} alt="" /></a>
                                        <p className="good_title"><a href="#">{item.title}</a></p>
                                        <p className="good_desc">{item.desc}</p>
                                        <p className="good_price">{item.price}
                                        {item.prePrice ? <label>{item.prePrice}</label>:''}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }   
                    </div>
                </div>
        
		)
	}
}