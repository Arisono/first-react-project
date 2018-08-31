/**
 * Created by Arison on 2018/8/28.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import changeValue from './reducers/Reducer'
import MyCounterApp from './containers/CounterContainer'
import  MyCounterChild from './containers/CounterChildContainer'
/**
 * Created by Arison on 17:08.
 */
class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'CounterApp'
        };
    }


    componentDidMount(){

    }

    render(){
        const  store=createStore(changeValue);
        return <div className="row">
            <Provider store={store}>
                <MyCounterApp/>
            </Provider>
        </div>
    }
}

export  default CounterApp;