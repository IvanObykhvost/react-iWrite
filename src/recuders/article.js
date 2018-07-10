import { ARTICLE } from '../constant/constant';

const initialState = {
    //inProgress: false,
    post: null,
    postError: null,

    postDeleteInProgress: false,
    postDeleteError: null,
    postDeleteSuccess: false,

    comments: null,
    commentsError: null,

    commentCreateInProgress: false,
    commentCreateError: null,

    commentDeleteInProgress: false,
    commentDeleteError: null,
}

export default function (state = initialState, action) {
    let result;

    switch (action.type) {
        case ARTICLE.ARTICLE_POST_REQUEST:
            return {
                ...state,
                postError: null,
                post: null
            }

        case ARTICLE.ARTICLE_POST_RESPONSE:
            return {
                ...state,
                postError: action.response.error ? action.response.error : null,
                post: action.response.post ? action.response.post : null
            }        

        case ARTICLE.ARTICLE_POST_DELETE_REQUEST:
            return {
                ...state,
                postDeleteInProgress: true,
                postDeleteError: null,
                postDeleteSuccess: false
            }   

        case ARTICLE.ARTICLE_POST_DELETE_RESPONSE:
            return {
                ...state,
                postDeleteInProgress: false,
                postDeleteError: action.response.error ? action.response.error : null,
                postDeleteSuccess: action.response.success ? true : false
            }  

        case ARTICLE.ARTICLE_COMMENTS_REQUEST:
            return {
                ...state,              
                comments: null,
                commentsError: null
            }

        case ARTICLE.ARTICLE_COMMENTS_RESPONSE:
            return {
                ...state,              
                comments: action.response.comments ? action.response.comments : null,
                commentsError: action.response.error ? action.response.error : null
            }  

        case ARTICLE.ARTICLE_COMMENT_CREATE_REQUEST:
            return {
                ...state,
                commentCreateInProgress: true,               
                commentCreateError: false,              
            }

        case ARTICLE.ARTICLE_COMMENT_CREATE_RESPONSE:
            result = { ...state };
            result.commentCreateInProgress = false;

            if (action.response.error)
                result.commentCreateError = action.response.error;
            else {
                let comments = [...state.comments];
                comments.unshift(action.response.comment);
                result.comments = comments;
            }

            return result;

        case ARTICLE.ARTICLE_COMMENT_DELETE_REQUEST:
            return {
                ...state,
                commentDeleteInProgress: true,
                commentDeleteError: null,
            }

        case ARTICLE.ARTICLE_COMMENT_DELETE_RESPONSE:
            result = { ...state };
            result.commentDeleteInProgress = false;

            if (action.response.error)
                result.commentDeleteError = action.response.error;
            else {
                result.comments = [];
                state.comments.forEach((comment) => {
                    if (comment.id !== action.response.comment.id) {
                       result.comments.push(comment);
                    }                    
                });                              
            }

            return result;
            

        case ARTICLE.ARTICLE_UNLOAD:
            return {                
                post: null,
                postError: null,

                postDeleteInProgress: false,
                postDeleteError: null,
                postDeleteSuccess: false,

                comments: null,
                commentsError: null,
            }

        default:
            return state;
    }
}