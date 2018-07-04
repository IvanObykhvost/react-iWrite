import { PROFILE, FOLLOW_USER} from '../constant/constant';
import api from "../api";

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
        dispatch(profileRequest());

        return api.Profile.get(username)
            .then(response => dispatch(profileResponse(response)))
    }
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
export function followUser(user, type) {
    return dispatch => {
        dispatch(followUserRequest());
        let response = null;

        switch (type) {
            case FOLLOW_USER.FOLLOW:
                //here should be asynch FOLLOW
                response = api.Profile.follow(user.name);
                break;

            case FOLLOW_USER.UNFOLLOW:
                //here should be asynch update
                //response = api.Posts.update(post)
                response = api.Profile.unfollow(user.name);
                break;

            default:
                //here should be asynch add
                //response = api.Posts.create(post)
                response = asyncFollow(user)
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
