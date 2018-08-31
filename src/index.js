import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css'; 
import "react-select/dist/react-select.css";
import AppContainer from './scenes/AppContainer/AppContainer';
import "./icon";


ReactDOM.render(
    <Provider store={store}>
       <AppContainer />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();


