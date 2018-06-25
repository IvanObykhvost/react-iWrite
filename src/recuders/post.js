import { EDITOR } from '../constant/constant';

const initialState = {}  


export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case EDITOR.POST_ADD:
            return [
                ...state,
                action.post
            ]

        case EDITOR.POST_UPDATE:
            return state.map(post =>
                (post.id === action.post.id)
                    ? action.post
                    : post
            )

        default:
            return state;
    }
}