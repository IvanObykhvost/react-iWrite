import navReducer from './nav-reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    navReducer,
    routing: routerReducer
});
