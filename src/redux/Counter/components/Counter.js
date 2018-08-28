/**
 * Created by Arison on 2018/8/28.
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CounterChild from "./CounterChild";


// const  Counter=({value,onIncClick,onDecClick})=>{
//
//     return (
//      <div className="container-fluid ">
//        <div className="row">
//            <div className="col-md-12">
//                <span className="text-info">计算结果：{value}</span>
//                <br />
//                <a  href="#" class="btn btn-primary" role="button" onClick={onIncClick}>加1</a>
//                <a href="#" class="btn btn-primary" role="button" onClick={onDecClick}
//                style={{marginLeft:'10px'}}>减1</a>
//            </div>
//        </div>
//      </div>
//     )
// };




//class风格的组件，不推荐
class Counter extends React.Component {
    render() {
        const {value,onIncClick,onDecClick,onInc10Click}=this.props;
        return (
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12" style={{border:'1px solid #f4f4f4'}}>
                        <div className="text-info" style={{height:'20px',paddingBottom:'10px',marginTop:'10px'}}>计算结果：{value}</div>
                        <br />
                        <a  href="#" class="btn btn-sm btn-primary" role="button" onClick={onIncClick}>加1</a>
                        <a href="#" class="btn btn-sm  btn-primary" role="button" onClick={onDecClick}
                           style={{marginLeft:'10px'}}>减1</a>

                        <a href="#" class="btn btn-sm btn-primary" role="button" onClick={onInc10Click}
                           style={{marginLeft:'10px'}}>加10</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6" style={{border:'1px solid #f4f4f4'}}>
                      <CounterChild onInc10Click={this.props.onInc10Click} name={'counter-child'}></CounterChild>

                    </div>
                </div>
            </div>
        )
    }
}

Counter.propTypes={
    value:PropTypes.number.isRequired,
    onIncClick:PropTypes.func.isRequired,
    onDecClick:PropTypes.func.isRequired,
    onInc10Click:PropTypes.func.isRequired
}


export default Counter;