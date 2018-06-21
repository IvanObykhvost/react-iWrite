import { AUTH, LOGIN_REQUEST } from '../constant/constant';

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
        dispatch(authRequest())
        return asyncAuth(data)
            .then(response => setTokenInCookie(response))
            .then(response => dispatch(authResponse(response)))
    }
}

function asyncAuth(/*email, password*/data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            data.username ?     
                //register
                resolve(
                {
                    user: {
                        token: "sdfsdf",
                        name: "",
                        bio: "",
                        date: ""
                    },                      
                })
                :
                //login
                resolve(
                    {
                        user: {
                            token: "sdfsdf",
                            name: "",
                            bio: "",
                            date: ""
                        },                    
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