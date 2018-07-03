import { SETTINGS } from '../constant/constant';

export function settingsRequest() {
    return {
        type: SETTINGS.SETTINGS_REQUEST
    }
}

export function settingsResponse(response) {
    return {
        type: SETTINGS.SETTINGS_RESPONSE,
        response
    }
}

export function settings(data) {
    return dispatch => {
        dispatch(settingsRequest())
        
        return asyncSettings(data)
            .then(response => dispatch(settingsResponse(response)))
    }
}

function asyncSettings(data) {
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
                            bio: "the happiest BOY in the world",
                            image: ""
                        },
                        //error: "email already taken"
                    })          
        }, 2000);
    })
}
