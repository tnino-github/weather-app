import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import App from './App';
import serviceWorker from './serviceWorker';

ReactDom.render(<App />, document.getElementById('root'));
//serviceWorker();