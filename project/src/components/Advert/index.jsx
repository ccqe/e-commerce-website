import React,{Component} from 'react'

import './index.css'

import {advertSrc} from './data'


export default class Advert extends Component{
	render(){
		return(
				<div className="ad_container con_width">
					<a href="#" alt="小米8 6G+128G" title="小米8 6G+128G"><img src={advertSrc[this.props.number]} /></a>
				</div>			
		)
	}
}