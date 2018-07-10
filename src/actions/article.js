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
/*-------POST DELETE-----------------*/


/*-----------------------------------COMMENTS--------------------------------------- */
function articleCommentsRequest() {
    return {
        type: ARTICLE.ARTICLE_COMMENTS_REQUEST
    }
}

function articleCommentsResponse(response) {
    return {
        type: ARTICLE.ARTICLE_COMMENTS_RESPONSE,
        response
    }
}

export function articleComments(postId) {
    return dispatch => {
        dispatch(articleCommentsRequest())

        return api.Comments.forArticle(postId)
            .then(response => dispatch(articleCommentsResponse(response)))
    }
}

//--------------------------------------CREATE COMMENT------------------------------------------------//
function articleCommentCreateRequest() {
    return {
        type: ARTICLE.ARTICLE_COMMENT_CREATE_REQUEST
    }
}

function articleCommentCreateResponse(response) {
    return {
        type: ARTICLE.ARTICLE_COMMENT_CREATE_RESPONSE,
        response
    }
}

export function articleCommentCreate(postId, commentText) {
    return dispatch => {
        dispatch(articleCommentCreateRequest())

        return api.Comments.create(postId, commentText)
            .then(response => dispatch(articleCommentCreateResponse(response)))
    }
}

//---------------------------------COMMENT DELETE

function articleCommentDeleteRequest() {
    return {
        type: ARTICLE.ARTICLE_COMMENT_DELETE_REQUEST
    }
}

function articleCommentDeleteResponse(response) {
    return {
        type: ARTICLE.ARTICLE_COMMENT_DELETE_RESPONSE,
        response
    }
}

export function articleCommentDelete(postId, commentId) {
    return dispatch => {
        dispatch(articleCommentDeleteRequest())

        return api.Comments.delete(postId, commentId)
            .then(response => dispatch(articleCommentDeleteResponse(response)))
    }
}

export function articleUnload() {
    return {
        type: ARTICLE.ARTICLE_UNLOAD
    }
}





