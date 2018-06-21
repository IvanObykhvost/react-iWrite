import { AUTH } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null
}

export default function (state = initialState, action) {

    switch (action.type) {       
        case AUTH.AUTH_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null
            }
       
        case AUTH.AUTH_RESPONSE:
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null
            }
        default:
            return state;
    }
}