import { EDITOR } from '../constant/constant';

//action to submit new post
/*export function postNew(post) {
    return {
        type: POST.POST_NEW,
        post
    }
}

export function postDelete(post) {
    return {
        type: POST.POST_NEW,
        post
    }
}*/

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