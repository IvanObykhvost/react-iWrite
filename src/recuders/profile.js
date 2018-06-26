import { PROFILE } from '../constant/constant';

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
        default:
            return state;
    }
}