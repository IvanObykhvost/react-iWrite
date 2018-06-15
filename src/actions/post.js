import { POST } from '../constant/constant';

//action to submit new post
export function postNew(post) {
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
}