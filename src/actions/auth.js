import { AUTH } from '../constant/constant';

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
                            id: 20,
                            email: "kolyatri@gmail.com",
                            createdAt: "20180-6-21",
                            updatedAt: "20180-6-21",
                            token: "sdfsdfsdfasdfabsdfgsdfgbsd",                    
                            name: "kolyatri",
                            bio: "the happiest boy in the world",
                            image: ""                
                    },         
                    //error: "register error"
                })
                :
                //login
                resolve(
                    {
                        user: {
                            id: 20,
                            email: "kolyatri@gmail.com",
                            createdAt: "20180-6-21",
                            updatedAt: "20180-6-21",
                            token: "sdfsdfsdfasdfabsdfgsdfgbsd",
                            name: "kolyatri",
                            bio: "the happiest boy in the world",
                            image: ""       
                        },       
                        //error: "login error"
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