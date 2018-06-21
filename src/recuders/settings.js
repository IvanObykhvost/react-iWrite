import { SETTINGS } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null,
    success: null
}

export default function(state = initialState, action) {

    switch (action.type) {
        case SETTINGS.SETTINGS_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null,
                success: null
            }

        case SETTINGS.SETTINGS_RESPONSE:
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null,
                success: action.response.user ? "Profile info has been updated successfully" : null,
            }
        default:
            return state;
    }
}