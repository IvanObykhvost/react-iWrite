import { ARTICLE } from '../constant/constant';

const initialState = {   
    postData: {
        post: null,
        postError: null,

        postDeleteInProgress: false,
        postDeleteError: null,
        postDeleteSuccess: false,
    },
    commentsData: {
        comments: null,
        commentsError: null,

        commentCreateInProgress: false,
        commentCreateError: null,

        commentDeleteInProgress: false,
        commentDeleteError: null,
    }
}

export default function (state = initialState, action) {
    let result;

    switch (action.type) {
        case ARTICLE.ARTICLE_POST_REQUEST:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    postError: null,
                    post: null
                }
            }

        case ARTICLE.ARTICLE_POST_RESPONSE:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    postError: action.response.error ? action.response.error : null,
                    post: action.response.post ? action.response.post : null
                }
            }        

        case ARTICLE.ARTICLE_POST_DELETE_REQUEST:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    postDeleteInProgress: true,
                    postDeleteError: null,
                    postDeleteSuccess: false
                }
            }   

        case ARTICLE.ARTICLE_POST_DELETE_RESPONSE:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    postDeleteInProgress: false,
                    postDeleteError: action.response.error ? action.response.error : null,
                    postDeleteSuccess: action.response.success ? true : false
                }
            }  

        case ARTICLE.ARTICLE_COMMENTS_REQUEST:
            return {
                ...state, 
                commentsData: {
                    ...state.commentsData,
                    comments: null,
                    commentsError: null
                }               
            }

        case ARTICLE.ARTICLE_COMMENTS_RESPONSE:
            return {
                ...state,              
                commentsData: {
                    ...state.commentsData,
                    comments: action.response.comments ? action.response.comments : null,
                    commentsError: action.response.error ? action.response.error : null
                }
            }  

        case ARTICLE.ARTICLE_COMMENT_CREATE_REQUEST:
            return {
                ...state,
                commentsData: {
                    ...state.commentsData,
                    commentCreateInProgress: true,
                    commentCreateError: false,
                }
            }

        case ARTICLE.ARTICLE_COMMENT_CREATE_RESPONSE:            
            if (action.response.error) {                
                return {
                    ...state,
                    commentsData: {
                        ...state.commentsData,
                        commentCreateInProgress: false,
                        commentCreateError: action.response.error
                    }
                }
            }
            else {
                let comments = [...state.commentsData.comments];
                comments.unshift(action.response.comment);               

                return {
                    ...state,
                    commentsData: {
                        ...state.commentsData,
                        commentCreateInProgress: false,
                        comments: [...comments]
                    }
                }
            }           


        case ARTICLE.ARTICLE_COMMENT_DELETE_REQUEST:
            return {
                ...state,
                commentsData: {
                    ...state.commentsData,
                    commentDeleteInProgress: false                    
                }
            }

        case ARTICLE.ARTICLE_COMMENT_DELETE_RESPONSE:           
            if (action.response.error) {
                return {
                    ...state,
                    commentsData: {
                        ...state.commentsData,
                        commentDeleteInProgress: false,
                        commentDeleteError: action.response.error
                    }
                }
            }
            else {
                let comments = [];
                state.commentsData.comments.forEach((comment) => {
                    if (comment.id !== action.response.comment.id) {
                        comments.push(comment);
                    }
                });    

                return {
                    ...state,
                    commentsData: {
                        ...state.commentsData,
                        commentCreateInProgress: false,
                        comments: [...comments]
                    }
                }
            }         
            

        case ARTICLE.ARTICLE_UNLOAD:
            return {                
                postData: {
                    post: null,
                    postError: null,

                    postDeleteInProgress: false,
                    postDeleteError: null,
                    postDeleteSuccess: false,
                },
                commentsData: {
                    comments: null,
                    commentsError: null,

                    commentCreateInProgress: false,
                    commentCreateError: null,

                    commentDeleteInProgress: false,
                    commentDeleteError: null,
                }
            }

        default:
            return state;
    }
}