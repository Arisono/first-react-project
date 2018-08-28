/**
 * Created by Arison on 2018/8/21.
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from "./Main";
import Header from "./Header";

/**
 * 模拟演示组件通信Context
 * Created by Arison on 2018/8/21.
 */
class App extends React.Component {

    static childContextTypes = {
        themeColor: PropTypes.string,
        titleDesc: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            themeColor: 'red',
            titleDesc: 'App'
        }
    }


    getChildContext() {
        return {
            themeColor: this.state.themeColor,
            titleDesc: this.state.titleDesc
        }
    }


    render() {
        let borderLine = {
            border: "1px solid #f4f4f4"
        };
        let green = {
            border: "1px solid green"
        };
        return <div className="row" style={green}>
                <div className="col-md-12">
                    <div className="row" style={borderLine}>
                        <div className="col-md-12">
                            APP组件标题描述：{this.state.titleDesc}
                            <br/>
                            APP组件主题颜色：{this.state.themeColor}
                        </div>
                    </div>
                </div>
            <Header/>
            <Main/>
        </div>
    }
}

export  default App;

// App.childContextTypes={
//     themeColor:PropTypes.string,
//     titleDesc:PropTypes.string
// }