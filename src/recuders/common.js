import { APP, AUTH, SETTINGS } from '../constant/constant';

const initialState = {
    currentUser: null,
    inProgress: true
}

export default function (state = initialState, action) {
    
    switch (action.type) {
        case APP.APP_LOAD_REQUEST:
            return {
                ...state,
            }

        case APP.APP_LOAD_RESPONSE:
            return {
                ...state,
                inProgress: false,
                currentUser: action.response.user ? action.response.user  :  null
            }
 
        case AUTH.AUTH_RESPONSE:
        case SETTINGS.SETTINGS_RESPONSE:
            return {
                ...state,
                currentUser: action.response.error ? null : action.response.user
            }

        default:
            return state;
    }
}