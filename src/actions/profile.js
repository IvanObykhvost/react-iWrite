import { PROFILE } from '../constant/constant';

export function profileRequest() {
    return {
        type: PROFILE.PROFILE_REQUEST
    }
}

export function profileResponse(response) {
    return {
        type: PROFILE.PROFILE_RESPONSE,
        response
    }
}

export function profileLoad(username) {
    return dispatch => {
        dispatch(profileRequest())
        return asyncProfile(username)
            .then(response => dispatch(profileResponse(response)))
    }
}


function asyncProfile(data) {
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
                        image: "https://visualhunt.com/photos/2/portrait-of-beautiful-cat-with-blue-eyes.jpg?s=l"
                    },
                    //error: "no user with such email"
                })
        }, 2000);
    })
}
