import { ARTICLE } from '../constant/constant';
import api from "../api";

export function articlePostRequest() {
    return {
        type: ARTICLE.ARTICLE_POST_REQUEST
    }
}

export function articlePostResponse(response) {
    return {
        type: ARTICLE.ARTICLE_POST_RESPONSE,
        response
    }
}

export function articlePost(id) {
    return dispatch => {
        dispatch(articlePostRequest())

        return api.Posts.get(id)
            .then(response => dispatch(articlePostResponse(response)))
    }
}
