import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './recuders/index';
import { PAGE } from './constant/constant';

const enhancers = [];
enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);

const middleware = [
    thunk
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const initialState = {
    page: PAGE.PAGE_HOME,
    posts: [],
    tags: []
}

export default createStore(
    reducer,
    initialState,
    composedEnhancers
)