import { POST } from '../constant/constant';

export function postsRequest() {
    return {
        type: POST.POST_REQUEST
    }
}

export function postsResponse(response) {
    return {
        type: POST.POST_RESPONSE,
        response
    }
}

export function postLoad(data) {
    return dispatch => {
        dispatch(postRequest())
        return asyncPost(data)
            .then(response => dispatch(postResponse(response)))
    }
}


function asyncPost(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve({
                    posts: [
                        {
                            id: 1, title: 'Title 1', topic: 'Topic 1', tags: ['Tag 1'], message: 'Message 1'
                        },
                        {
                            id: 2, title: 'Title 2', topic: 'Topic 2', tags: ['Tag 2'], message: 'Message 2'
                        },
                        {
                            id: 3, title: 'Title 3', topic: 'Topic 3', tags: ['Tag 3'], message: 'Message 3'
                        },

                    ]
                }
                //{ error: "email already taken" }
            )
        }, 2000);
    })
}
