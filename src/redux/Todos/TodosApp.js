/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 15:06.
 */
class TodosApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'TodosApp'
        };
    }

    componentDidMount(){
        
    }
   
    render(){
        const store = createStore(rootReducer)
        return <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    }
}

export  default TodosApp;
