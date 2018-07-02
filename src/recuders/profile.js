import { PROFILE,FOLLOW_USER } from '../constant/constant';

const initialState = {  
    error: null,
    profile: null   
}

export default function(state = initialState, action) {

    switch (action.type) {
        case PROFILE.PROFILE_REQUEST:
            return {
                ...state,                
                error: null,
                profile: null
            }

        case PROFILE.PROFILE_RESPONSE:
            return {
                ...state,                
                error: action.response.error ? action.response.error : null,
                profile: action.response.error ? null : action.response.user,
            }

        //action.response can be error or success
        case FOLLOW_USER.FOLLOW_USER_RESPONSE:
            return {
                ...state,
                profile: { ...state.profile, following: action.response.error ? state.profile.following : !state.profile.following }               
            }

        default:
            return state;
    }
}