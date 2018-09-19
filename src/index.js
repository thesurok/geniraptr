import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.css';
import Geniraptr from './Geniraptr';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Geniraptr />, document.getElementById('app'));
registerServiceWorker();
