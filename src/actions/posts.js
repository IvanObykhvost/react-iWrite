import { POSTS, POSTS_REQUEST_TYPES } from '../constant/constant';

export function postsRequest() {
    return {
        type: POSTS.POSTS_REQUEST
    }
}

export function postsResponse(response) {
    return {
        type: POSTS.POSTS_RESPONSE,
        response
    }
}

export function postsGetAll() {
    return dispatch => {
        dispatch(postsRequest())
        return asyncPosts({})
            .then(response => dispatch(postsResponse(response)))
    }
}

//type can be: ALL, FOLLOW, FAVOURITE
export function postsGetByUsername(username, type) {

    return dispatch => {
        dispatch(postsRequest());
        let response = null;

        switch (type) {
            case POSTS_REQUEST_TYPES.ALL:
                response = asyncPosts(username)

            case POSTS_REQUEST_TYPES.FOLLOW:
                response = asyncPosts(username)

            case POSTS_REQUEST_TYPES.FAVOURITE:
                response = asyncPosts(username)

            default:
                response = asyncPosts(username)
        }

        response
            .then(response => dispatch(postsResponse(response)))        
    }
}

/*
export function postsGetFollowByUsername(username) {
    return dispatch => {
        dispatch(postsRequest())
        return asyncPosts(username)
            .then(response => dispatch(postsResponse(response)))
    }
}

export function postsGetByUsername(username) {
    return dispatch => {
        dispatch(postsRequest())
        return asyncPosts(username)
            .then(response => dispatch(postsResponse(response)))
    }
}

export function postsGetFavouriteByUsername(username) {
    return dispatch => {
        dispatch(postsRequest())
        return asyncPosts(username)
            .then(response => dispatch(postsResponse(response)))
    }
}
*/

//TODO: to get rid of it
/*export function postsLoad(data) {
    return dispatch => {
        dispatch(postsRequest())
        return asyncPosts(data)
            .then(response => dispatch(postsResponse(response)))
    }
}*/


function asyncPosts(username) {
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
                //{ error: "Server error, sorry" }
            )
        }, 2000);
    })
}
