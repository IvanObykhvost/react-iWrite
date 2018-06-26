import { EDITOR } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EDITOR.EDITOR_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null
            }

        case EDITOR.EDITOR_RESPONSE:
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null
            }

        default:
            return state;
    }
}