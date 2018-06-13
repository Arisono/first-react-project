/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 2018/6/13.
 */
class Topic extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <h3>{this.props.match.params.topicsId}</h3>
            <div className="list-group" style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>
                <div className="list-group-item">
                   路由组件 props:{JSON.stringify(this.props)}
                </div>
            </div>
        </div>
    }
}

export  default Topic;