import React,{Component} from 'react'

import './index.css'

import {topNavContent,topSearchArr} from './data';


export default class TopNav extends Component{
    state={
        currentTop:0,
    }

    componentDidMount(){
        this.timer=setInterval(()=>{         
            const {currentTop}=this.state
            if(currentTop===topSearchArr.length-1) return this.setState({currentTop:0})
            else return this.setState({currentTop:currentTop+1})
        },2000)
    }
    componentWillUnmount(){
		clearInterval(this.timer)
	}
	render(){
		return(
			<div className="main_nav con_width">

                <div className="logo">
                    <img src={require('./images/mi-logo.png').default} alt="MIlogo" title="小米官网"/>
                </div>

                <div className="nav">
                    <ul>
                    {   topNavContent.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a href="#">{item.title}</a>
                                {item.content
                                ?   <div className="nav_item">
                                        <div className="nav_item_con con_width">
                                            <ul>
                                                {
                                                    item.content.map((obj,index)=>{
                                                        return (
                                                            <li key={index}>
                                                                <a href="#" className="nav_item_con_img">
                                                                    <img src={obj.src} />
                                                                </a>
                                                                <a href="#" className="nav_item_con_name">{obj.name}</a>
                                                                {obj.price? <p>{obj.price}</p> : <div><br/><p>智能硬件</p></div>}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                :''
                                }
                            </li>
                        )
                    }) 
                        
                    }
                    </ul>
                </div>
		
                <div className="search_box">
                    <form auction="#">
                        <input type="search" name="search" className="search" placeholder={topSearchArr[this.state.currentTop]}/>
                        <button>
                            <i className="iconfont icon-sousuo"></i>
                        </button>
                        
                
                        <div className="datalist">
                            <ul>
                                <li><a href="#">小米10</a></li>
                                <li><a href="#">小米手机</a></li>
                                <li><a href="#">洗衣机</a></li>
                                <li><a href="#">空调</a></li>
                                <li><a href="#">耳机</a></li>
                            </ul>
                        </div>
                    </form>
                </div>

		    </div>
		)
	}
}