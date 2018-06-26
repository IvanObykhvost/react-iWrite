import { POST } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null
}

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case POST.POST_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null
            }

        case POST.POST_RESPONSE:
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null
            }

        default:
            return state;
    }
}