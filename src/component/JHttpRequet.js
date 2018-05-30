/**
 * Created by Arison on 2018/4/23.
 */

import React from 'react';
import  axios from 'axios';


class  JHttpRequet extends React.Component {

    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }

    componentDidMount(){
      let url='http://127.0.0.1:8080/data/home';
     axios.get(url)
         .then(res=>{
             console.log(''+res);
             console.log(JSON.stringify(res))
             this.setState( {
                 result:JSON.stringify(res)
             })
        }) .catch(function (error) {
         console.log(error);
     });
     //
      //  axios.get(url)
  }

    render(){
        return <div>
         <span>{this.state.result}</span>
        </div>
    }

}

export default JHttpRequet;