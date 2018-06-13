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
        return <div>
            <Router>
                {/*只能有一个子元素*/}
                <div>
                    <h2>路由</h2>
                     {/*简单的列表*/}
                     <ul >
                         <li ><Link to="/" >主菜单</Link></li>
                         <li ><Link to="/about">关于</Link></li>
                         <li ><Link to="/topics">主题</Link></li>
                     </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        </div>
    }
}

export  default BasicExample;