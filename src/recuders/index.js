import * as navReducer from './nav-reducer';
import * as post from './post';
import { combineReducers } from 'redux';

export default combineReducers({
    navReducer,
    post
});
