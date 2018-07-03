import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './recuders/index';

const enhancers = [];
enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = [
    thunk,
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export default createStore(
    reducer,
    {},
    composedEnhancers
)