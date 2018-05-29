import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SiginForm from './component/SiginForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SiginForm />, document.getElementById('root'));
registerServiceWorker();
