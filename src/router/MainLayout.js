/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./basic/Home";
import About from "./basic/About";
import Topics from "./basic/Topics";

/**
 * 演示基本的路由
 * Created by Arison on 2018/6/13.
 */
class BasicExample extends React.Component{
   
    render(){
        let fluid={
            border:"1px solid #ffffff",
        };
        let borderLine={
            border:"1px solid #ffffff",
            height:"43px"
        };
        return <div className="" style={fluid}>
            <Router>
                {/*只能有一个子元素*/}
                <div className="container-fluid">
                    <div className="row" style={borderLine} >

                        {/*简单的列表*/}
                        <img src="http://img1.imgtn.bdimg.com/it/u=271374175,3988466214&fm=15&gp=0.jpg"
                             style={{display:"inline-block",width:"40px",height:"38px",border:"1px solid #ffffff"}}></img>
                        {/*<ul style={{display:"inline-block", border:"1px solid #ffffff"}}>*/}

                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/home" >主菜单</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/about">官方案例</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">主题</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">路由机制</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">React组件</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">Antd</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">Redux</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">ReactNative</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">后台模板</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">开发框架</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">开源项目</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">网络通讯</Link></li>
                        <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                            <Link to="/topics">布局适配</Link></li>
                      {/*  </ul>*/}
                    </div>
                    <div className="row">
                        <Route  path="/home" component={Home} />
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics} />
                    </div>
                </div>


            </Router>
        </div>
    }
}

export  default BasicExample;