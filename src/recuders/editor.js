import { EDITOR } from '../constant/constant';

const initialState = {   
    post: null,   
    postError: null,

    editorInProgress: false,
    editorError: null,
    editorSuccess: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        //when post ADD
        case EDITOR.EMPTY_POST_INITIALIZE:
            return {
                ...state,
                post: {
                    id: null,
                    title: '',
                    topic: '',
                    tags: '',
                    message: ''
                },
                postError: null
            }

        //when post UPDATE
        case EDITOR.EDITOR_POST_REQUEST:
            return {
                ...state,
                postError: null
            }

        //when post UPDATE
        case EDITOR.EDITOR_POST_RESPONSE:
            return {
                ...state,
                postError: action.response.error ? action.response.error : null,
                post: action.response.post
            }

        //when post field changed on post form
        case EDITOR.EDITOR_POST_CHANGE:
            return {
                ...state,            
                post: { ...state.post, [action.key]: action.value }
            }

        case EDITOR.EDITOR_REQUEST:
            return {
                ...state,
                editorInProgress: true,
                editorError: null
            }

        case EDITOR.EDITOR_RESPONSE:
            return {
                ...state,
                editorInProgress: false,
                editorError: action.response.error ? action.response.error : null,
                editorSuccess: action.response.error ? false : true
            }

        default:
            return state;
    }
}