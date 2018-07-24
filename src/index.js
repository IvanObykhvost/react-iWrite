import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import "react-select/dist/react-select.css";
import AppContainer from './scenes/AppContainer/AppContainer';


ReactDOM.render(
    <Provider store={store}>
       <AppContainer />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();


