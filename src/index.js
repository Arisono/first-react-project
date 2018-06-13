import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*网络请求模块*/
/*签到组件*/
import SiginForm from './component/SiginForm'
/*样式布局模块*/
/*Bootstrap 列表组件*/
import  BSList from "./bootstrap/list/BSList"
import  Section from  "./component/scroll/Section"
import registerServiceWorker from './registerServiceWorker';
/*路由模块*/
/*路由-简单的例子*/
import BasicExample from "./router/basic/BasicExample";

ReactDOM.render(<BasicExample/>, document.getElementById('root'));
registerServiceWorker();
