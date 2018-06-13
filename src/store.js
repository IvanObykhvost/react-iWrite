import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

//add reducer
//import { } from 

const enhancers = [];
enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = [
    thunk
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const reducer = combineReducers({});

export default createStore(
    reducer,
    composedEnhancers
)