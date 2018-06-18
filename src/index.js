import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Router from './Router';

import './index.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css'; 



function Root({ children }) {
    return <div id="App">
        {children}
    </div>;
}

ReactDOM.render(
    <Provider store={store}>
        <Root>
            <Router />
        </Root>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();


