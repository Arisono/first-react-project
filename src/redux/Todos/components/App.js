/**
 * Created by Arison on 2018/8/29.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
/**
 * Created by Arison on 15:27.
 */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'App'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div>
            <AddTodo></AddTodo>
            <VisibleTodoList></VisibleTodoList>

        </div>
    }
}

export  default App;