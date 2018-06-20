import { AUTH } from '../constant/constant';

export function loginRequest() {
    return {
        type: AUTH.LOGIN_REQUEST        
    }
}

export function loginResponse(response) {
    return {
        type: AUTH.LOGIN_RESPONSE,
        response
    }
}

export function login(email,password) {
    return dispatch => {
        dispatch(loginRequest())
        return asyncLoginRequest(email, password)
            .then(response => setTokenInCookie(response))
            .then(response => dispatch(loginResponse(response)))
    }
}

export function register(auth) {
    return {
        type: AUTH.REGISTER
    }
}

function asyncLoginRequest(login,password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {            
            resolve(
                {
                    user: {
                        token: "sdfsdf",
                        name: "",
                        bio: "",
                        date: ""
                    }
                    //error: "invalid email or password"
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