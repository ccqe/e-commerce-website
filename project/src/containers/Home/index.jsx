import React,{Component} from 'react'

import Header from '../../components/Header'
import TopNav from '../../components/TopNav'
import LeftNav from '../../components/LeftNav'
import SubBar from '../../components/SubBar'
import SaleBar from '../../components/SaleBar'
import PhoneBar from '../../components/PhoneBar'
import ApplianceBar from '../../components/ApplianceBar'
import SmartBar from '../../components/SmartBar'
import MatchBar from '../../components/MatchBar'
import PartsBar from '../../components/PartsBar'
import RimBar from '../../components/RimBar'
import VideoBar from '../../components/VideoBar'
import Footer from '../../components/Footer'
import Advert from '../../components/Advert'
import RightNav from '../../components/RightNav'

import {connect} from 'react-redux'
import {} from '../../redux/actions'

class Home extends Component{
  render(){
    return (
      <div>
        <div>
          <Header username={this.props.user.username} logout/>
          <TopNav/>
        </div>

        <div>
          <LeftNav/>
          <SubBar/>
        </div>

        <div className="goods">
          <SaleBar/>
          <Advert number={0}/>
          <PhoneBar/>
          <Advert number={1}/>
          <ApplianceBar/>
          <Advert number={2}/>
          <SmartBar/>
          <Advert number={3}/>
          <MatchBar/>
          <Advert number={4}/>
          <PartsBar/>
          <Advert number={5}/>
          <RimBar/>
          <Advert number={6}/>
          <VideoBar/>
        </div>

        <div>
          <Footer/>
        </div>

        <div>
          <RightNav/>
        </div>
      </div>
    )
  }
}

export default connect(
	state => ({user: state.user}),//映射状态
	{}//映射操作状态的方法
)(Home)