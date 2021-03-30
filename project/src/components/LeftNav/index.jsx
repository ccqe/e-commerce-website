import React,{Component} from 'react'

import './index.css'

import {bannerContent,leftNavContent} from './data'


var timer=null;

export default class LeftNav extends Component{
    state = {
        current: 0
    };

    clickPoint(index){
        console.log("@"+index)
        clearInterval(timer)
        this.setState({current:index})
        this.carousel(3000)

    }
    clickAround(around){
        
        clearInterval(timer)
        let {current} =this.state
        if(around==='L'){
            if(current>0) this.setState({current:current-1})
        }
        if(around==='R'){
            if(current<bannerContent.length-1) this.setState({current:current+1})
        }
        this.carousel(3000)
    }

    enterPoint(index){
        clearInterval(timer)
        this.setState({current:index})
    }

    carousel(speed){
        timer = setInterval(() => {
            let {current} =this.state
            current++;
            if(current>=bannerContent.length) return this.setState({current:0})
            else return this.setState({current:current})
        }, speed);
    }

    componentDidMount () {
        this.carousel(3000);
    }
    componentWillUnmount(){
		clearInterval(timer)
	}

	render(){
		return(
			<div className="home_container con_width">

                <div className="menu_list">
                    <ul>
                        {
                            leftNavContent.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <a href="#">{item.title}<span className="arrow">&gt;</span></a>
                                        <div className="menu_list_item">
                                            <ul className="menu_list_goods menu_col_4">
                                                {
                                                    item.content.map((list,index)=>{
                                                        return(
                                                            <li key={index}>
                                                                <a href="#">
                                                                    <img src={list.src} alt=""/>
                                                                    <span>{list.name}</span>
                                                                </a>
                                                            </li>
                                                        )
                                                    })                                                   
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="banner">
                    <ul>
                        {
                            bannerContent.map((value,index)=>{
                                return (
                                    <li key={index}
                                    className={`${this.state.current === index ? "active" : ""}`}
                                    >
                                        <a href="#"><img src={value} alt="小米" title="小米" /></a>
                                    </li>
                                )
                            })
                        }   
                    </ul>
                    <div className="circle-list">
                        <ul>
                            {
                                bannerContent.map((_,index)=>{
                                    return (
                                        <li key={index}
                                        className={`${this.state.current === index ? "active-circle" : ""}`}                       
                                        onClick={()=>this.clickPoint(index)}
                                        onMouseEnter={()=>this.enterPoint(index)}
                                        onMouseLeave={()=>this.carousel(3000)}
                                        ></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="banner-left banner-arrow" onClick={()=>this.clickAround('L')}></div>
                    <div className="banner-right banner-arrow" onClick={()=>this.clickAround('R')}></div>
                </div>
            </div>
        )
	}
}

