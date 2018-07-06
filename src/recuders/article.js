import { ARTICLE } from '../constant/constant';

const initialState = {
    //inProgress: false,
    post: null,
    postError: null,

    postDeleteInProgress: false,
    postDeleteError: null,
    postDeleteSuccess: false
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

        case ARTICLE.ARTICLE_UNLOAD:
            return {                
                post: null,
                postError: null,

                postDeleteInProgress: false,
                postDeleteError: null,
                postDeleteSuccess: false
            }

        default:
            return state;
    }
}