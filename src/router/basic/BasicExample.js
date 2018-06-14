/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";

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
        return <div className="container-fluid" style={fluid}>
            <Router>
                {/*只能有一个子元素*/}
                <div className="row">
                    <div style={borderLine} >

                        {/*简单的列表*/}
                        <ul style={{border:"1px solid #ffffff"}}>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/" >主菜单</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/about">官方案例</Link></li>
                            <li style={{display:"inline-block",padding:"10px",border:"1px solid #f4f4f4"}}>
                                <Link to="/topics">主题</Link></li>
                        </ul>
                    </div>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        </div>
    }
}

export  default BasicExample;