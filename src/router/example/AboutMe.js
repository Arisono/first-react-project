/**
 * Created by Arison on 2018/6/14.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 2018/6/14.
 */
class AboutMe extends React.Component{
       constructor(props){
        super(props);
    }
    render(){
        return <div className="row">
            <iframe className="col-md-12" style={{height:"600px",padding:"0"}} src="https://www.baidu.com" name="iframe_a"
                    frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
        </div>
    }
}

export  default AboutMe;