/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 2018/6/13.
 */
class AuthExample extends React.Component{
       constructor(props){
        super(props);
    }


    render(){
        return  <Router>
            <div>
               权限调转案例
            </div>
        </Router>
    }
}

export  default AuthExample;