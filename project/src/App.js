import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'

//数据模拟
import './mock/login'
import './mock/register'

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    )
  }
}
