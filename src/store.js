import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from "./data/user/reducer";
// import reducer from './recuders/index';

const enhancers = [];
enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = [
    thunk,
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const reducer = combineReducers({
    user
});


export default createStore(
    reducer,
    {},
    composedEnhancers
)