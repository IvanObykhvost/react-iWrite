import post from './post';
import posts from './posts';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import common from './common';
import auth from './auth';
import settings from './settings';
import profile from './profile';
import editor from './editor';

export default combineReducers({
    post, 
    posts,
    routing: routerReducer,
    common,
    auth,
    settings,
    profile,
    editor
});
