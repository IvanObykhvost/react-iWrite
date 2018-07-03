import { PROFILE, FOLLOW_USER} from '../constant/constant';

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
                        email: "ivanobyhvost@gmail.com",
                        createdAt: "20180-6-21",
                        updatedAt: "20180-6-21",
                        token: "sdfsdfsdfasdfabsdfgsdfgbsd",
                        name: "ivan_obyhvost",
                        //name: "kolyatri",
                        bio: "the happiest BOY in the world",
                        image: "https://visualhunt.com/photos/2/portrait-of-beautiful-cat-with-blue-eyes.jpg?s=l",
                        following: false
                    },
                    //error: "no user with such email"
                })
        }, 2000);
    })
}


//------------------------------------FOLLOW AND UNFOLLOW USER----------------------------------------

export function followUserRequest() {
    return {
        type: FOLLOW_USER.FOLLOW_USER_REQUEST
    }
}

export function followUserResponse(response) {
    return {
        type: FOLLOW_USER.FOLLOW_USER_RESPONSE,
        response
    }
}

//can be unfollow , depends on "type" param
export function followUser(token, user, type) {
    return dispatch => {
        dispatch(followUserRequest());
        let response = null;

        switch (type) {
            case FOLLOW_USER.FOLLOW:
                //here should be asynch FOLLOW
                //response = api.Posts.create(post)


                response = asyncFollow(token, user)

            case FOLLOW_USER.UNFOLLOW:
                //here should be asynch update
                //response = api.Posts.update(post)



                response = asyncFollow(token, user)

            default:
                //here should be asynch add
                //response = api.Posts.create(post)


                response = asyncFollow(token, user)
        }

        response
            .then(response => dispatch(followUserResponse(response)))
    }
}
    
function asyncFollow(token, user) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    success: ""
                    //error: "no user with such email"
                })
        }, 2000);
    })
}
