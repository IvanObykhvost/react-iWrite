import { AUTH, LOGIN_REQUEST } from '../constant/constant';
import api from "../api";

export function authRequest() {
    return {
        type: AUTH.AUTH_REQUEST,
    }
}

export function authResponse(response) {
    return {
        type: AUTH.AUTH_RESPONSE,
        response,
    }
}

export function auth(data) {
    return dispatch => {
        dispatch(authRequest());

        let response = null;

        if(data.username)
            response = api.Auth.register(data.username, data.email, data.password);
        else 
            response = api.Auth.login(data.email, data.password);
        response
            .then(response => setTokenInCookie(response))
            .then(response => dispatch(authResponse(response)))
    }
}

function setTokenInCookie(response) {
    return new Promise(function (resolve, reject) {
        response.user ? localStorage.setItem('jwt', response.user.token) : null
        resolve(response)
    })
}