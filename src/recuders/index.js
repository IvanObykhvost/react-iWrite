import posts from './posts';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import common from './common';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    posts,
    routing: routerReducer,
    common,
    auth,
    profile
});
