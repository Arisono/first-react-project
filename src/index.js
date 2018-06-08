import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*签到组件*/
import SiginForm from './component/SiginForm'
/*Bootstrap 列表组件*/
import  BSList from "./bootstrap/list/BSList"
import  Section from  "./component/scroll/Section"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Section />, document.getElementById('root'));
registerServiceWorker();
