import { ARTICLE } from '../constant/constant';

const initialState = {
    inProgress: false,
    error: null,
    post: null
}

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case ARTICLE.ARTICLE_REQUEST:
            return {
                ...state,
                inProgress: true,
                error: null,
                post: null
            }

        case ARTICLE.ARTICLE_RESPONSE:
            return {
                ...state,
                inProgress: false,
                error: action.response.error ? action.response.error : null,
                post: action.response.post ? action.response.post : null
            }

        default:
            return state;
    }
}