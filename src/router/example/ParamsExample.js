/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 2018/6/13.
 */
class ParamsExample extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("render  paramsExample -----")
        const Child = ({ match }) => (
            <div>
                <h3>获取参数ID: {match.params.id}</h3>
            </div>
        );

        const ComponentWithRegex = ({ match }) => (
            <div>
                <h3>Only asc/desc are allowed: {match.params.direction}</h3>
            </div>
        );
        return   <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/netflix`}>Netflix</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/zillow-group`}>Zillow Group</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/yahoo`}>Yahoo</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/modus-create`}>Modus Create</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/order/asc`}>order-asc(不受限制的访问)</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/order/errors`}>order-errors(受限制的访问)</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:id`} component={Child} />

                {/*
                 It's possible to use regular expressions to control what param values should be matched.
                 * "/order/asc"  - matched
                 * "/order/desc" - matched
                 * "/order/foo"  - not matched
                 */}
                <Route
                    path={`${this.props.match.url}/order/:direction(asc|desc)`}
                    component={ComponentWithRegex}
                />
            </div>
        </Router>
    }
}

export  default ParamsExample;