/**
 * Created by Arison on 2018/6/14.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuExample from "../menu/MenuExample";
import SortableExample from "../../component/scroll/SortableExample";
/**
 * Created by Arison on 2018/6/14.
 */
class AntdIndex extends React.Component{
       constructor(props){
        super(props);
    }
    render(){
        return <div className="row" >
            {/*去除iframe的内部边距 需要添加padding:0*/}
            <div className="col-md-2">
                <div className="list-group-item">
                    <Link   to={`${this.props.match.url}/home`}>Home</Link>
                </div>
                <div className="list-group-item">
                    <Link   to={`${this.props.match.url}/menu`}>菜单</Link>
                </div>

            </div>
            <div className="col-md-10">
                <Route path={`${this.props.match.url}/home`} component={MenuExample}> </Route>
                <Route path={`${this.props.match.url}/menu`} component={SortableExample}> </Route>
            </div>
           {/* <iframe className="col-md-12" style={{height:"590px", border:"2px solid #B0212F",display:"block",padding:"0"}}
                    src="http://localhost:8001/#/dashboard/analysis"
                frameborder="0" border="0" marginwidth="0" marginheight="0"  allowtransparency="yes"/>*/}
        </div>
    }
}

export  default AntdIndex;