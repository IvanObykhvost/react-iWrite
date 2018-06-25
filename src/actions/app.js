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
        //return api.Auth.current()
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
                    user: {
                        id: 20,
                        email: "kolyatri@gmail.com",
                        createdAt: "20180-6-21",
                        updatedAt: "20180-6-21",
                        token: "sdfsdfsdfasdfabsdfgsdfgbsd",
                        name: "kolyatri",
                        bio: "the happiest boy in the world",
                        image: "https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjb87j3sufbAhXE1qQKHWzwCWsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw3TJP40sVhL9XqfZhuz_wxS&ust=1529761263794345"
                    }
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