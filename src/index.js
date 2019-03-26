import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';

ReactDOM.hydrate(<App />, document.getElementById('root'));