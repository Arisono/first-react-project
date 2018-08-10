/**
 * Created by Arison on 2018/7/3.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * 书签列表
 * Created by Arison on 11:04.
 */
class BookNotes extends React.Component{
    constructor(props){
        console.log("constructor()");
        super(props);
        this.state={
            name:'BookNotes'
        };
    }

    componentDidMount(){
        console.log("componentDidMount()")

    }
   
    render(){
         console.log("render()");
        return <div>
            
        </div>
    }
}

export  default BookNotes;