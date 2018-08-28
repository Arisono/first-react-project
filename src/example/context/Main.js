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
class Main extends React.Component {
    static contextTypes = {
        themeColor: PropTypes.string,
        titleDesc: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    changeChange(event){
        console.log("main changeChange()");
        event.preventDefault();
        console.log("main changeChange()"+this.context.themeColor);
    }

    render() {
        let borderLine = {
            border: "1px solid #f4f4f4"
        };
        return <div className="row" style={borderLine}>
            <div className="col-md-12">
                Main组件：{this.context.themeColor}
                <br/>
                Main组件：{this.context.titleDesc}
            </div>
            <div className="col-md-12">
                <a href="#" class="btn btn-primary" role="button" style={{fontSize:"8"}}
                   onClick={this.changeChange.bind(this)}>
                    更新
                </a>
            </div>
        </div>
    }
}

export  default Main;