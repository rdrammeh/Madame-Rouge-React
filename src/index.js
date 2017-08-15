import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './Homepage/homepage'

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
