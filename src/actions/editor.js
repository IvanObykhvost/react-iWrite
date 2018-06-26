import { EDITOR } from '../constant/constant';
import api from "../api";

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
        return api.Posts.create(post)
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