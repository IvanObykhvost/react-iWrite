import { EDITOR } from '../constant/constant';
import api from "../api";


//USE only whene try to ADD NEW post (NO need to download post)
export function editorEmptyPostInitialize() {
    return {
        type: EDITOR.EMPTY_POST_INITIALIZE
    }
}

//USE only whene try to UPDATE post (need to download post)
export function editorPostRequest() {
    return {
        type: EDITOR.EDITOR_POST_REQUEST,
    }
}

//USE only whene try to UPDATE post (need to download post)
export function editorPostResponse(response) {
    return {
        type: EDITOR.EDITOR_POST_RESPONSE,
        response
    }
}

//USE only when try to UPDATE post (need to download post)
export function editorPost(id) {
    return dispatch => {
        dispatch(editorPostRequest())
        
        //return asyncEditorPost(id)           
        return api.Posts.get(id)  
            .then(response => dispatch(editorPostResponse(response)))
    }    
}


//USED when post fields are cahnged on form , data format {"post_prop_name":"post_prop_value"}
export function editorPostChange(key, value) {
    return {
        type: EDITOR.EDITOR_POST_CHANGE,
        key,
        value
    }
}


//is used when form is submitted 
export function editorRequest() {
    return {
        type: EDITOR.EDITOR_REQUEST,
    }
}

export function editorResponse(response) {
    return {
        type: EDITOR.EDITOR_RESPONSE,
        response
    }
}

export function postAdd(post) {
    return dispatch => {
        dispatch(editorRequest());
        let response = null;

        switch (type) {
            case EDITOR_REQUEST_TYPES.ADD:
                //here should be asynch add
                //response = api.Posts.create(post)
                response = api.Posts.create(post);
                break;

            case EDITOR_REQUEST_TYPES.UPDATE:
                //here should be asynch update
                //response = api.Posts.update(post)
                response = asyncEdit(post);
                break;      

            default:
                //here should be asynch add
                //response = api.Posts.create(post)
                response = asyncEdit(post);
                break;
        }

        response
            .then(response => dispatch(editorResponse(response)))
    }
}

export function postUpdate(post) {
    return dispatch => {
        dispatch(editorRequest());
        return api.Posts.create(post)
            .then(response => dispatch(editorResponse(response)))
    }
}