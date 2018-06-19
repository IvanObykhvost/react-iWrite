import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './components/App/App';


ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();


