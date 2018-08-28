/**
 * Created by Arison on 2018/8/21.
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Created by Arison on 2018/8/21.
 */
class Header extends React.Component{

    static contextTypes = {
        themeColor: PropTypes.string,
        titleDesc:PropTypes.string
    }
    constructor(props){
        super(props);
    }

    changeChange(event){
        console.log("changeChange()");
        event.preventDefault();
        this.context.themeColor="green";

        this.setState({});

    }

    render(){
        return <div className="row">
           <div className="col-md-12">
               Header组件：{this.context.themeColor}
               <br/>
               Header组件：{this.context.titleDesc}


           </div>
            <div className="col-md-12">
                <a href="#" class="btn btn-primary" role="button" style={{fontSize:"8"}}
                   onClick={this.changeChange.bind(this)}>
                    更改
                </a>
            </div>
        </div>
    }
}

export  default Header;

// Header.contextTypes={
//     themeColor: PropTypes.string,
//     titleDesc:PropTypes.string
// }