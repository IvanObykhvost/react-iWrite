import { ARTICLE } from '../constant/constant';

const initialState = {
    //inProgress: false,
    post: null,
    postError: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ARTICLE.ARTICLE_POST_REQUEST:
            return {
                ...state,
                //inProgress: true,
                postError: null,
                post: null
            }

        case ARTICLE.ARTICLE_POST_RESPONSE:
            return {
                ...state,
                //inProgress: false,
                postError: action.response.error ? action.response.error : null,
                post: action.response.post ? action.response.post : null
            }

        default:
            return state;
    }
}