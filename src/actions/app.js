import { APP } from '../constant/constant';

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
        return asyncAppLoadRequest(token)
            .then( response => setTokenInCookie(response))
            .then( response => dispatch(appLoadResponse(response)))            
    }
}

function asyncAppLoadRequest(token) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {            
            resolve(
                {
                    /*user: {
                        token: "sdfsdf",
                        name: "",
                        bio: "",
                        date: ""
                    }*/
                })
        }, 2000);
    })
}

function setTokenInCookie(response) {
    return new Promise(function(resolve, reject) {
        response.user ? localStorage.setItem('jwt', response.user.token) : null
        resolve(response)
    })
}