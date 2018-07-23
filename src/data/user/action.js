import { AUTH } from './constant';
import api from '../../api';

export function logout() {
    return {
        type: AUTH.LOGOUT
    }
}

export function currentUserResponse(data) {
    return {
        type: AUTH.CURRENT_USER,
        data
    }
}

export function currentUser(){
    return dispatch => {
        return api.Auth.current()
            .then( data => dispatch(currentUserResponse(data)))
    }
}