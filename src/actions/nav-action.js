import { PAGE } from '../constant/constant';

export function home() {
    return {
        type: PAGE.PAGE_HOME
    }
}

export function newPost() {
    return {
        type: PAGE.PAGE_NEW_POST
    }
}