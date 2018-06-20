import { AUTH } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null
}

export default function (state = initialState, action) {

    switch (action.type) {
        case AUTH.LOGIN_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null
            }

        case AUTH.LOGIN_RESPONSE:
            console.log("action.response");
            console.log(action.response);
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null
            }
        default:
            return state;
    }
}