/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactPage from "./pages/ReactPage";
import BindPhonePage from "./pages/BindPhonePage";

class BasicExample extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Router  basename="/wxService">
           <div>
               <Route   path="/react" component={ReactPage} />
               <Route  path="/bindPhone" component={BindPhonePage} />
           </div>
            </Router>
    }
}
export  default BasicExample;