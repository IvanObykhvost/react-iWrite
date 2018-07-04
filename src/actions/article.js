import { ARTICLE } from '../constant/constant';
import api from "../api";

export function articleRequest() {
    return {
        type: ARTICLE.ARTICLE_REQUEST
    }
}

export function articleResponse(response) {
    return {
        type: ARTICLE.ARTICLE_RESPONSE,
        response
    }
}

export function articleLoad(id) {
    return dispatch => {
        dispatch(articleRequest())

        return api.Posts.get(id)
            .then(response => dispatch(articleResponse(response)))
    }
}
