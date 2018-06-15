import { POST } from '../constant/constant';

const initialState = {
    posts: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case POST.POST_NEW:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
       
        default:
            return state;
    }
}