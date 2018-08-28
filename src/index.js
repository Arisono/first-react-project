import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




import registerServiceWorker from './registerServiceWorker';
import BasicExample from "./router/MainLayout";



//没有用到redux
ReactDOM.render(<BasicExample/>, document.getElementById('root'));

// ReactDOM.render(,document.getElementById('root'));
registerServiceWorker();
