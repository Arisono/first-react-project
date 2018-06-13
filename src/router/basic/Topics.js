/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Topic from "./Topic";
/**
 * Created by Arison on 2018/6/13.
 */
class Topics extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h2><Link to={`/topics`}>主题</Link></h2>
            <ul>
                <li>
                    <Link to={`${this.props.match.url}/topic-one`}>主题一</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/topic-two`}>主题二</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/topic-three`}>主题三</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/topic-fourth`}>主题四</Link>
                </li>
            </ul>

            <Route path={`${this.props.match.url}/:topicsId`} component={Topic} />
            <Route
                exact
                path={this.props.match.url}
                render={() => <h1 style={{color:"red"}}>请选择一个主题</h1>}
            />
        </div>
    }
}

export  default Topics;