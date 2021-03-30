import React,{Component} from 'react'

import './index.css'

import {saleAllGoods} from './data'

var timer=null
export default class SaleBar extends Component{
	state={
		current:3,
		listLastNum:[]
	}

	countPage(){
		const sum = saleAllGoods.length
		const time = Math.ceil(sum/4)
		const page =new Array()
		for(let i=0,count=-1;i<time;i++){			
			count=count+4;
			if(count>sum-1){count=sum-1}
			page.push(count)
		}
		this.setState({listLastNum:page})
	}

	changeList(key){
		const {current} =this.state
		switch(key){
			case 'R':{
				if(current!=saleAllGoods.length-1){
					let t=this.state.listLastNum.indexOf(current)+1
					let c = this.state.listLastNum[t]
					this.setState({current:c})
				}
				break;
			}
			case 'L':{
				if(current!=3){
					let t=this.state.listLastNum.indexOf(current)-1
					let c = this.state.listLastNum[t]
					this.setState({current:c})
				}
				break;
			}
		}
	}

	carousel(speed){
        timer = setInterval(() => {
            const {current} =this.state
            if(current===saleAllGoods.length-1){
				return this.setState({current:3})
			}
			else{
				let t=this.state.listLastNum.indexOf(current)+1
				let c = this.state.listLastNum[t]
				this.setState({current:c})
			}
        }, speed);
    }

	componentDidMount(){
		this.countPage()
		this.carousel(5000)
	}

	componentWillUnmount(){
		clearInterval(timer)
	}

	render(){
		const saleGoods = saleAllGoods.slice(this.state.current-3,this.state.current+1)

		return(
			<div className="flashover con_width">
				<h1 className="list_title">小米秒杀
					<div className="flashover_a">
						<a
						onClick={()=>this.changeList('L')}
						>&lt;</a>
						<a
						onClick={()=>this.changeList('R')}
						>&gt;</a>
					</div>
				</h1>
				
				<div className="flashover_list">
                    
					<div className="flashover_item countdown goodlist4">
						<p className="countdown_title">18:00 场</p>
						<i className="iconfont icon-shandian"></i>
						<p className="countdown_desc">距离结束还有</p>
						<div className="countdown_time">
							<label className="countdown_time_item" id="_h">00</label>
							<label className="countdown_item_dot">:</label>
							<label className="countdown_time_item" id="_m">00</label>
							<label className="countdown_item_dot">:</label>
							<label className="countdown_time_item" id="_s">00</label>
						</div>
					</div>

					<div className="flashover_item_con">
						<div className="flashover_item_con_div" style={{left: '0px'}}>
							<div className="flashover_item flashover_goodlist goodlist1">
								<a href="">
									<div className="goodlist_content">
										<img src={saleGoods[0].src} alt="" />
										<p className="good_title">{saleGoods[0].title}</p>
										<p className="good_desc">{saleGoods[0].desc}</p>
										<p className="good_price">{saleGoods[0].price}<label>{saleGoods[0].prePrice}</label></p>
									</div>
								</a>
							</div>
							<div className="flashover_item flashover_goodlist goodlist2">
								<a href="">
									<div className="goodlist_content">
										<img src={saleGoods[1].src} alt="" />
										<p className="good_title">{saleGoods[1].title}</p>
										<p className="good_desc">{saleGoods[1].desc}</p>
										<p className="good_price">{saleGoods[1].price}<label>{saleGoods[1].prePrice}</label></p>
									</div>
								</a>
							</div>
							<div className="flashover_item flashover_goodlist goodlist3">
								<a href="">
									<div className="goodlist_content">
										<img src={saleGoods[2].src} alt="" />
										<p className="good_title">{saleGoods[2].title}</p>
										<p className="good_desc">{saleGoods[2].desc}</p>
										<p className="good_price">{saleGoods[2].price}<label>{saleGoods[2].prePrice}</label></p>
									</div>
								</a>
							</div>
							<div className="flashover_item flashover_goodlist goodlist4">
								<a href="">
									<div className="goodlist_content">
										<img src={saleGoods[3].src} alt="" />
										<p className="good_title">{saleGoods[3].title}</p>
										<p className="good_desc">{saleGoods[3].desc}</p>
										<p className="good_price">{saleGoods[3].price}<label>{saleGoods[3].prePrice}</label></p>
									</div>
								</a>
							</div>				
						</div>
					</div>
				</div>
			</div>
		)
	}
}