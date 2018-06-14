import { POST } from '../constant/constant';

const initialState = {
    post: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case POST.POST_NEW:
            return {
                ...state,
                post: action.post
            }
       
        default:
            return state;
    }
}