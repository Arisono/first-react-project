/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./basic/Home";
import About from "./basic/About";
import Topics from "./basic/Topics";
import AntdIndex from "../antd/index/AntdIndex";
import AboutMe from "./example/AboutMe";
import  reactJPG from  "../images/react.jpg";
import Index from "../antd/Index";
/**
 * 演示基本的路由
 * Created by Arison on 2018/6/13.
 */
class BasicExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
           isFirstLoad:true
        };
    }


    render(){
        let fluid={
            border:"1px solid #ffffff",
        };
        let borderLine={
            border:"1px solid #ffffff",
            overflow:"hidden",
            height:"44px"
        };

        return  <div >
            <Router  basename="/Chapter/">
                {/*只能有一个子元素*/}
                <div className="container-fluid" style={fluid}>
                    <div className="row" style={borderLine} >

                        {/*简单的列表*/}

                        {/*<ul style={{display:"inline-block", border:"1px solid #ffffff"}}>*/}

                        <div className="col-md-12"  style={{overflowX:"scroll",overflowY:"hidden",whiteSpace:"nowrap"}}>
                            <img src={reactJPG}
                                 style={{display:"inline-block",width:"40px",height:"38px",border:"1px solid #ffffff"}}></img>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link  to="/" >首页</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/home" >主菜单</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/about">官方</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">主题</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">路由</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">组件</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/antd">Antd</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">Redux</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">ReactNative</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">模板</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">框架</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">开源</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">网络</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">适配</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">其它</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/aboutMe">关于我</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">加群：<span style={{color:"red",fontWeight:"bold"}}>794472095</span></Link></li>
                        </div>

                        {/*  </ul>*/}
                    </div>
                    {/*这里如果是row 会增加右边的边距*/}

                        <Route className="col-md-12" exact path="/" component={Index} />
                        <Route className="col-md-12" path="/home" component={Home} />
                        <Route className="col-md-12" path="/about" component={About}/>
                        <Route className="col-md-12" path="/topics" component={Topics} />
                        {/*<Route className="col-md-12" path="/aboutMe/:webUrl" component={WebView} />*/}
                        {/*<Route className="col-md-12" path={{pathname:"/antd",state:{webUrl:"http://localhost:8001/#/dashboard/analysis"}}}   component={WebView} />*/}
                        <Route className="col-md-12" path="/antd" component={AntdIndex} />
                        <Route className="col-md-12" path="/aboutMe" component={AboutMe} />
                        {this.renderIndex()}
                </div>

            </Router>
            </div>
    }

    renderIndex(){
        if(this.state.isFirstLoad){
            this.setState({
                isFirstLoad:false
            });
            console.log("重定向--------------")
            return <div>

            </div>
        }else{
            console.log("无重定向--------------")
            return <div>

            </div>
        }
    }
}

export  default BasicExample;