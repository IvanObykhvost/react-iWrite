import { ARTICLE } from '../constant/constant';
import api from "../api";

function articlePostRequest() {
    return {
        type: ARTICLE.ARTICLE_POST_REQUEST
    }
}

function articlePostResponse(response) {
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

/*-------POST DELETE-----------------*/
function articlePostDeleteRequest() {
    return {
        type: ARTICLE.ARTICLE_POST_DELETE_REQUEST        
    }
}


function articlePostDeleteResponse(response) {
    return {
        type: ARTICLE.ARTICLE_POST_DELETE_RESPONSE,
        response
    }
}

export function articlePostDelete(post) {
    return dispatch => {
        dispatch(articlePostDeleteRequest())
        //return api.Posts.get(id)
        return asynchPostDelete(post)
            .then(response => dispatch(articlePostDeleteResponse(response)))
    }
}

function asynchPostDelete(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    //success: true
                    error: "server error"
                })
        }, 2000);
    })
}

export function articleUnload() {
    return {
        type: ARTICLE.ARTICLE_UNLOAD
    }
}





