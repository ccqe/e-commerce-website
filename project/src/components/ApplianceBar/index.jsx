import React,{Component} from 'react'

import './index.css'

import {applianceSubSrc,applianceGoods} from './data'

export default class ApplianceBar extends Component{
    state={
        currentContent:0
    }

    changeContent(value){
        this.setState({currentContent:value})
    }

	render(){
		return(          
               <div className="wiring con_width clearfix">
                    <h1 className="list_title">家电
                        <ul>
                            <li 
                            className={`${this.state.currentContent === 0 ? "active" : ""}`}
                            onMouseOver={()=>this.changeContent(0)}><a href="">热门</a></li>
                            <li className={`${this.state.currentContent === 1 ? "active" : ""}`}
                            onMouseOver={()=>this.changeContent(1)}><a href="">电视影音</a></li>
                        </ul>
                    </h1>
                    
                    <div className="wiring_left">
                        <a href=""><img src={applianceSubSrc[0]}/></a>
                        <a href=""><img src={applianceSubSrc[1]}/></a>
                    </div>
				    
                    <div className="wiring_right">		
                    {
                        applianceGoods.map((item,index)=>{
                            return(
                                <div className={`${this.state.currentContent === index ? "wiring_right_con" : "wiring_right_con hide"}`} key={item.id}>
                                    {
                                        item.subContent.map((list,index)=>{
                                            return(
                                                <div className="goods_item_list" key={index}>
                                                    <div className="goodlist_content">
                                                        <a href=""><img src={list.src} alt="" /></a>
                                                        <p className="good_title"><a href="">{list.title}</a></p>
                                                        <p className="good_desc">{list.desc}</p>
                                                        <p className="good_price">{list.price}
                                                        {list.prePrice?<label>{list.prePrice}</label>:''}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })                           
                                    }   
                                    <div className="goods_item_list_last">
											{
												item.lastContent
												?<div className="goods_item_last_list clearfix">
													<div className="goods_item_last_list_left">
														<a href="">{item.lastContent.title}</a>
														<span>{item.lastContent.price}</span>
													</div>
													<div className="goods_item_last_list_right">
														<img src={item.lastContent.src} />
													</div>
												</div>
												:""
											}
											<div className="goods_item_last_list clearfix">
												<div className="goods_item_last_list_left">
													<a href="" className="more">
														<p>浏览更多</p>
														<label>{item.name}</label>
													</a>
												</div>
												<div className="goods_item_last_list_right">
													<a href=""><i className="iconfont icon-you"></i></a>
												</div>
											</div>
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