/**
 * Created by Arison on 2018/8/28.
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 16:32.
 */
class CounterChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'CounterChild'
        };

    }
    
    
    componentDidMount(){
        console.log("componentDidMount() "+JSON.stringify(this.props));
    }
   
    render(){
        console.log("render() "+JSON.stringify(this.props));
        const {onInc10Click,onMulClick}=this.props;
        return <div className="row" style={{border:'1px solid green'}}>
            <a href="#" class="btn btn-sm btn-primary" role="button" onClick={onInc10Click}
               style={{marginLeft:'10px'}}>加10</a>
            <a href="#" class="btn btn-sm btn-primary" role="button" onClick={onMulClick}
               style={{marginLeft:'10px'}}>乘10</a>
        </div>
    }
}


CounterChild.propTypes={
    onMulClick:PropTypes.func.isRequired
}


export  default CounterChild;