/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactPage from "./pages/ReactPage";
import BindPhonePage from "./pages/BindPhonePage";
import BSList from "../bootstrap/list/BSList";
import AntdPage from "./pages/AntdPage";

class BasicExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router basename="/wxService/">
            <div>
                {/*   <Route  exact path="/" component={BSList} />*/}
                <Route path="/react" component={ReactPage}/>
                <Route path="/bindPhone" component={BindPhonePage}/>
                <Route path="/antdPage" component={AntdPage}/>
            </div>
        </Router>
    }
}
export  default BasicExample;