/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SiginForm from "../component/SiginForm";
import LoginForm from "../component/LoginForm";
import JHttpRequet from "../component/JHttpRequet";
import BSList from "../bootstrap/list/BSList";
import SocketsManage from "../example/SocketsManage";
import App from "../App";
import CounterApp from "./Counter/CounterApp";
import TodosApp from "./Todos/TodosApp";
/**
 * Created by Arison on 11:00.
 */
class ReduxIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'ReduxIndex'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div className="row">
                <div className="col-md-2" style={{border:"1px solid #ffffff",padding:"0px.0px.10px.0px"}}>
                    <ul style={{border:"1px solid #f4f4f4",paddingTop:"10px",minHeight:"600px"}}>
                        <li><Link to={`${this.props.match.url}/counter`}>counter(计算器)</Link></li>
                        <li><Link to={`${this.props.match.url}/todoList`}>todoList(简单的列表)</Link></li>
                        <li><Link to={`${this.props.match.url}/http`}>网络组件</Link></li>
                        <li><Link to={`${this.props.match.url}/bootstrap`}>样式组件</Link></li>
                        <li><Link to={`${this.props.match.url}/sockets`}>Sockets</Link></li>
                        <li><Link to={`${this.props.match.url}/context`}>React-Context</Link></li>
                    </ul>
                </div>
                <div className="col-md-10" style={{border:"1px solid #f4f4f4"}}>
                    {/*签到组件*/}
                    <Route path={`${this.props.match.url}/counter`} component={CounterApp}/>
                    <Route path={`${this.props.match.url}/todoList`} component={TodosApp}/>
                    <Route path={`${this.props.match.url}/http`} component={JHttpRequet}/>
                    <Route path={`${this.props.match.url}/bootstrap`} component={BSList}/>
                    <Route path={`${this.props.match.url}/sockets`} component={SocketsManage}/>
                    <Route path={`${this.props.match.url}/context`} component={App}/>
                </div>
            </div>
    }
}

export  default ReduxIndex;