import { EDITOR } from '../constant/constant';

export function postAdd(post) {
    return {
        type: EDITOR.POST_ADD,
        post
    }
}

export function postUpdate(post) {
    return {
        type: EDITOR.POST_UPDATE,
        post
    }
}