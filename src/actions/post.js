import { POST } from '../constant/constant';
import api from "../api";

export function postRequest() {
    return {
        type: POST.POST_REQUEST
    }
}

export function postResponse(response) {
    return {
        type: POST.POST_RESPONSE,
        response
    }
}

export function postLoad(data) {
    return dispatch => {
        dispatch(postRequest())

        return api.Posts.get(data)
            .then(response => dispatch(postResponse(response)))
    }
}
