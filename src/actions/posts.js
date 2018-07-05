import { POSTS, POSTS_REQUEST_TYPES, POST_FAVOURITING } from '../constant/constant';
import api from "../api";

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
        return api.Posts.all()
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
                // response = asyncPosts(username)
                response = api.Posts.byAuthor(username);
                break;

            case POSTS_REQUEST_TYPES.FOLLOW:
                response = api.Posts.feed();
                break;

            case POSTS_REQUEST_TYPES.FAVOURITE:
                response = asyncPosts(username)
                break;

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
            resolve(
                    //posts: 
                    [
                        {
                            id: 1, title: 'Title 1', topic: 'Topic 1', tags: ['Tag 1'], message: 'Message 1', createdAt: "7/04/2018", author: { name: "Kolyatri" }, favourited: false, favouritesCount: 5
                        },
                        {
                            id: 2, title: 'Title 2', topic: 'Topic 2', tags: ['Tag 2'], message: 'Message 2', createdAt: "7/04/2018", author: { name: "Kolyatri" }, favourited: true, favouritesCount: 9
                        },
                        {
                            id: 3, title: 'Title 3', topic: 'Topic 3', tags: ['Tag 3'], message: 'Message 3', createdAt: "7/04/2018", author: { name: "Kolyatri" }, favourited: false, favouritesCount: 5
                        }
                    ]
                
                //{ error: "Server error, sorry" }
            )
        }, 2000);
    })
}


//THE SAME FOR UNFAVOURITED PROCESS
function postFavouriteResponse(response) {
    return {
        type: POST_FAVOURITING.POST_FAVOURITED,
        response
    }
}

//WORKS FOR BOTH: favourite and unfavourite
export function postFavourite(post, type) {
    return dispatch => {
       // dispatch(postsRequest());
        let response = null;

        switch (type) {
            case POST_FAVOURITING.FAVOURITE:
                response = asyncPostFavourite(post)                
                break;

            case POST_FAVOURITING.UNFAVOURITE:
                response = asyncPostUnfavourite(post)
                break;           

            default:
                response = asyncPostFavourite(post)
        }

        response
            .then(response => dispatch(postFavouriteResponse(response)))
    }
}

function asyncPostFavourite(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(              
                {
                    post: {
                        id: 1, title: 'Title 1', topic: 'Topic 1', tags: ['Tag 1'], message: 'Message 1', createdAt: "7/04/2018", author: { name: "Kolyatri" }, favourited: true, favouritesCount: 6
                    }
                    // error: "Server error, sorry" 
                },                           
            )
        }, 2000);
    })
}

function asyncPostUnfavourite(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                {
                    post: {
                        id: 2, title: 'Title 2', topic: 'Topic 2', tags: ['Tag 2'], message: 'Message 2', createdAt: "7/04/2018", author: { name: "Kolyatri" }, favourited: false, favouritesCount: 8
                    }
                    //error: "Server error, sorry" 
                },
            )
        }, 2000);
    })
}






