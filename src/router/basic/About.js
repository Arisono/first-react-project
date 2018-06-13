/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ParamsExample from "../Example/ParamsExample";
import Topic from "./Topic";
import AuthExample from "../Example/AuthExample";
/**
 * Created by Arison on 2018/6/13.
 */
class About extends React.Component{

    render(){
        let borderLine={
            border:"2px solid #f4f4f4",
            padding:"5px 5px 5px 5px",
            minHeight:"600px"
        };
        return <div className="container-fluid">
            <h2>官方案例:</h2>
         <div className="row">
             <div className="col-md-2" style={borderLine}>
                 <ul>
                     <li><Link to={`${this.props.match.url}/parameters`}>URL Parameters</Link></li>
                     <li><Link to={`${this.props.match.url}/redirects`}>Redirects (Auth)</Link></li>
                 </ul>
             </div>

             <div className="col-md-10" style={borderLine}>
                 <Route path={`${this.props.match.url}/parameters`} component={ParamsExample} />
                 <Route path={`${this.props.match.url}/redirects`} component={AuthExample} />
             </div>
         </div>
        </div>
    }
}

export  default About;