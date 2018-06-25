import { PROFILE } from '../constant/constant';

const initialState = {
    //inProgress: true,
    //inProgress: false,
    error: null,
    profile: null
    //success: null
}

export default function(state = initialState, action) {

    switch (action.type) {
        case PROFILE.PROFILE_REQUEST:
            return {
                ...state,
                //inProgress: true,
                error: null,
                profile: null
            }

        case PROFILE.PROFILE_RESPONSE:
            return {
                ...state,
                //inProgress: false,
                error: action.response.error ? action.response.error : null,
                profile: action.response.error ? null : action.response.profile,
            }
        default:
            return state;
    }
}