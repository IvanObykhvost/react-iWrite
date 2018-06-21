import posts from './posts';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import common from './common';
import auth from './auth';
import settings from './settings';

export default combineReducers({
    posts,
    routing: routerReducer,
    common,
    auth,
    settings
});
