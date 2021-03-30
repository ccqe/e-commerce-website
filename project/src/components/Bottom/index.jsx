import React,{Component} from 'react'

import './index.css'

export default class Test extends Component{
	render(){
		return(
			<div className="bottom">
                <div className="bottom-area">
                    <ul>
                        <li><a href="#" className="bottom-select">简体</a>|</li>
                        <li><a href="#">繁体</a>|</li>
                        <li><a href="#">English</a>|</li>
                        <li><a href="#">常见问题</a>|</li>
                        <li><a href="#">隐私政策</a></li>
                    </ul>
                </div>
                <div className="bottom-safe">
                    <p>
                        <span>小米公司版权所有-京ICP备10046444-</span>
                        <a className="beian-record-link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134">
                            <span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png" /></span>
                            <span>京公网安备11010802020134号</span>
                        </a>
                        <span>-京ICP证110507号</span>
                    </p>
                </div>       
            </div>
		)
	}
}