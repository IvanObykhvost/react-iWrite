﻿import { POSTS } from '../constant/constant';

const initialState = {
    posts: null,
        /*[
        {
            id: 1, title: 'Title 1', topic: 'Topic 1', tags: ['Tag 1'], message: 'Message 1'
        },
        {
            id: 2, title: 'Title 2', topic: 'Topic 2', tags: ['Tag 2'], message: 'Message 2'
        },
        {
            id: 3, title: 'Title 3', topic: 'Topic 3', tags: ['Tag 3'], message: 'Message 3'
        }    
    ],*/
    error: null
}

export default function(state = initialState, action) {
   
    switch (action.type) {
        case POSTS.POSTS_REQUEST:
            return {
                ...state,
                //inProgress: true,
                error: null,
                posts: null
            }

        case POSTS.POSTS_RESPONSE:
            return {
                ...state,
                //inProgress: false,
                error: action.response.error ? action.response.error : null,
                posts: action.response.error ? null : action.response.posts,
            }
        default:
            return state;
    }
}