import { APP } from '../constant/constant';
import api from "../api";

export function appLoadRequest() {
    return {
        type: APP.APP_LOAD_REQUEST,      
    }
}

export function appLoadResponse(response) {
    return {
        type: APP.APP_LOAD_RESPONSE,
        response
    }
}

export function appLoad(token) {
    return dispatch => {
        dispatch(appLoadRequest())
        
        return api.Auth.current()
            .then( response => setTokenInCookie(response))
            .then( response => dispatch(appLoadResponse(response)))            
    }
}

function setTokenInCookie(response) {
    return new Promise(function(resolve, reject) {
        response.user ? localStorage.setItem('jwt', response.user.token) : null
        resolve(response)
    })
}