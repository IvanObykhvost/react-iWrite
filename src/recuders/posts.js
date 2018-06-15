import { POST } from '../constant/constant';

const initialState =  []

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case POST.POST_NEW:
            return [
                ...state,
                action.post
            ]
       
        default:
            return state;
    }
}