/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ParamsExample from "../example/ParamsExample";
import AuthExample from "../example/AuthExample";
/**
 * Created by Arison on 2018/6/13.
 */
class About extends React.Component{

    render(){
        let borderLine0={
            border:"1px solid #ffffff",
            marginTop:"0px",
            minHeight:"600px"
        };
        let borderLine={
            border:"1.5px solid #f4f4f4",
            padding:"5px 5px 5px 5px",
            minHeight:"600px"
        };
        return <div   style={borderLine0}>

         <div className="row" >
             <div className="col-md-2" style={borderLine}>
                 <ul>
                     <li><a href="https://reacttraining.com/react-router/web/example/static-router">react-router</a></li>
                     <li><Link to={`${this.props.match.url}/parameters`}>URL Parameters</Link></li>
                     <li><Link to={`${this.props.match.url}/redirects`}>Redirects (Auth)</Link></li>
                     <li>Custom Link</li>
                     <li>Preventing Transitions</li>
                     <li>No Match (404)</li>
                     <li>Recursive Paths</li>
                     <li>Sidebar</li>
                     <li>Animated Transitions</li>
                     <li>Ambiguous Matches</li>
                     <li>Route Config</li>
                     <li>Modal Gallery</li>
                     <li>StaticRouter Context</li>
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