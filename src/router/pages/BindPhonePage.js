/**
 * Created by Arison on 2018/10/19.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReduxIndex from "../../redux/ReduxIndex";
/**
 * Created by Arison on 2018/10/19.
 */
class BindPhonePage extends React.Component{
       constructor(props){
        super(props);
    }
    render(){
        console.log("BindPhonePage:"+this.props.match.url);
        return <div>
            <p style={{fontSize:50}}> 绑定手机号界面</p>
            <Route className="col-md-12" path={`${this.props.match.url}/redux`} component={ReduxIndex} />
        </div>
    }
}

export  default BindPhonePage;