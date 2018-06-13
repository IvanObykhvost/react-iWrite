﻿import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

//add reducer
import reducer from './recuders/index';

const enhancers = [];
enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = [
    thunk
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export default createStore(
    reducer,
    composedEnhancers
)