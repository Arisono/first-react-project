/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SiginForm from "../../component/SiginForm";
import JHttpRequet from "../../component/JHttpRequet";
import BSList from "../../bootstrap/list/BSList";
import LoginForm from "../../component/LoginForm";
import SocketsManage from "../../example/SocketsManage";
import App from "../../example/context/App";
/**
 * 主菜单界面
 * Created by Arison on 2018/6/13.
 */
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("Home this.props.match.url:"+this.props.match.url);
        return <div className="row">
                  <div className="col-md-2" style={{border:"1px solid #ffffff",padding:"0px.0px.10px.10px"}}>
                      <ul style={{border:"1px solid #f4f4f4",paddingTop:"10px",minHeight:"600px"}}>
                          <li><Link to={`${this.props.match.url}/sign`}>签到组件</Link></li>
                          <li><Link to={`${this.props.match.url}/login`}>登录组件</Link></li>
                          <li><Link to={`${this.props.match.url}/http`}>网络组件</Link></li>
                          <li><Link to={`${this.props.match.url}/bootstrap`}>样式组件</Link></li>
                          <li><Link to={`${this.props.match.url}/sockets`}>Sockets</Link></li>
                          <li><Link to={`${this.props.match.url}/context`}>React-Context</Link></li>
                      </ul>
                  </div>
                  <div className="col-md-10" style={{border:"1px solid #f4f4f4"}}>
                      {/*签到组件*/}
                      <Route path={`${this.props.match.url}/sign`} component={SiginForm}/>
                      <Route path={`${this.props.match.url}/login`} component={LoginForm}/>
                      <Route path={`${this.props.match.url}/http`} component={JHttpRequet}/>
                      <Route path={`${this.props.match.url}/bootstrap`} component={BSList}/>
                      <Route path={`${this.props.match.url}/sockets`} component={SocketsManage}/>
                      <Route path={`${this.props.match.url}/context`} component={App}/>
                  </div>
        </div>
    }
}

export  default Home;