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

        return asynchComments(postId)
            .then(response => dispatch(articleCommentsResponse(response)))
    }
}

function asynchComments(postId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    //comments: [],
                    comments: [
                        {
                            id: 23,
                            createdAt: "2018-07-01T10:11:48.980Z",
                            updatedAt: "2018-07-01T10:11:48.980Z",
                            body: "comment message",
                            author: {
                                name: "kolyatri",
                                bio: "the happiest man in the world",
                                image: "",
                                following: false
                            }
                        },
                        {
                            id: 24,
                            createdAt: "2018-07-01T10:11:48.980Z",
                            updatedAt: "2018-07-01T10:11:48.980Z",
                            body: "comment message2",
                            author: {
                                name: "ivan_obuhvost",
                                bio: "broke down the API",
                                image: "",
                                following: false
                            }
                        }
                    ],
                    //error: "server error"
                })
        }, 2000);
    })
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

        return asynchCommentCreate(postId, commentText)
            .then(response => dispatch(articleCommentCreateResponse(response)))
    }
}

function asynchCommentCreate(postId, commentText) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    /*comment: {
                        id: 23,
                        createdAt: "2018-07-01T10:11:48.980Z",
                        updatedAt: "2018-07-01T10:11:48.980Z",
                        body: commentText,
                        author: {
                            name: "kolyatri",
                            bio: "the happiest man in the world",
                            image: "",
                            following: false
                        }
                    },*/
                    error: "server error comment creation"
                })
        }, 2000);
    })
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

        return asynchCommentDelete(postId, commentId)
            .then(response => dispatch(articleCommentDeleteResponse(response)))
    }
}

function asynchCommentDelete(postId, commentId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    comment: {
                        id: 23,
                        createdAt: "2018-07-01T10:11:48.980Z",
                        updatedAt: "2018-07-01T10:11:48.980Z",
                        body: "comment message",
                        author: {
                            name: "kolyatri",
                            bio: "the happiest man in the world",
                            image: "",
                            following: false
                        }
                    }
                    //error: "server error comment creation"
                })
        }, 2000);
    })
}


export function articleUnload() {
    return {
        type: ARTICLE.ARTICLE_UNLOAD
    }
}





