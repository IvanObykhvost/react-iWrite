import posts from './posts';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    posts,
    routing: routerReducer    
});
