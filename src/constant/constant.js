export const EMPTY_POST_INITIALIZE = "EMPTY_POST_INITIALIZE"
export const EDITOR_POST_REQUEST = "EDITOR_POST_REQUEST"
export const EDITOR_POST_RESPONSE = "EDITOR_POST_RESPONSE"
export const EDITOR_POST_CHANGE = "EDITOR_POST_CHANGE"
export const EDITOR_REQUEST = "EDITOR_REQUEST"
export const EDITOR_RESPONSE = "EDITOR_RESPONSE"
export const EDITOR_UNLOAD = "EDITOR_UNLOAD"


export const ARTICLE_POST_REQUEST = "ARTICLE_POST_REQUEST"
export const ARTICLE_POST_RESPONSE = "ARTICLE_POST_RESPONSE"
export const ARTICLE_POST_DELETE_REQUEST = "ARTICLE_POST_DELETE_REQUEST"
export const ARTICLE_POST_DELETE_RESPONSE = "ARTICLE_POST_DELETE_RESPONSE"
export const ARTICLE_COMMENTS_REQUEST = "ARTICLE_COMMENTS_REQUEST"
export const ARTICLE_COMMENTS_RESPONSE = "ARTICLE_COMMENTS_RESPONSE"
export const ARTICLE_COMMENT_CREATE_REQUEST = "ARTICLE_COMMENT_CREATE_REQUEST"
export const ARTICLE_COMMENT_CREATE_RESPONSE = "ARTICLE_COMMENT_CREATE_RESPONSE"
export const ARTICLE_COMMENT_DELETE_REQUEST = "ARTICLE_COMMENT_DELETE_REQUEST"
export const ARTICLE_COMMENT_DELETE_RESPONSE = "ARTICLE_COMMENT_DELETE_RESPONSE"
export const ARTICLE_UNLOAD = "ARTICLE_UNLOAD"

export const APP_LOAD_REQUEST = "APP_LOAD_REQUEST"
export const APP_LOAD_RESPONSE = "APP_LOAD_RESPONSE"

export const AUTH_REQUEST = "AUTH_REQUEST"
export const AUTH_RESPONSE = "AUTH_RESPONSE"
export const LOGOUT = "LOGOUT"

export const SETTINGS_REQUEST = "SETTINGS_REQUEST"
export const SETTINGS_RESPONSE = "SETTINGS_RESPONSE"

export const PROFILE_REQUEST = "PROFILE_REQUEST"
export const PROFILE_RESPONSE = "PROFILE_RESPONSE"

//follow action_types
export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST"
export const FOLLOW_USER_RESPONSE = "FOLLOW_USER_RESPONSE"

//folowing mode
//export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

export const POSTS_REQUEST = "POSTS_REQUEST"
export const POSTS_RESPONSE = "POSTS_RESPONSE"


/*------POST FAVOURITING-----------*/
//action type, shows for BOTH: favourited OR unfavourited
export const POST_FAVOURITED = "POST_FAVOURITED"

//for asynch mode: 
export const UNFAVOURITE = "UNFAVOURITE"
/*------POST FAVOURITING-----------*/



export const ARTICLE = {
    ARTICLE_POST_REQUEST,
    ARTICLE_POST_RESPONSE,
    ARTICLE_POST_DELETE_REQUEST,
    ARTICLE_POST_DELETE_RESPONSE,

    ARTICLE_COMMENTS_REQUEST,
    ARTICLE_COMMENTS_RESPONSE,
    ARTICLE_COMMENT_CREATE_REQUEST,
    ARTICLE_COMMENT_CREATE_RESPONSE,
    ARTICLE_COMMENT_DELETE_REQUEST,
    ARTICLE_COMMENT_DELETE_RESPONSE,

    ARTICLE_UNLOAD
}

/*--------------------------EDITOR---------*/

export const EDITOR = {
    //need it when post ADD
    EMPTY_POST_INITIALIZE,   

    //use them when post UPDATE
    EDITOR_POST_REQUEST,
    EDITOR_POST_RESPONSE,

    //use it when post field is updated on form 
    EDITOR_POST_CHANGE,

    //use when press form submit
    EDITOR_REQUEST,
    EDITOR_RESPONSE,

    //use when leave the editor page
    EDITOR_UNLOAD
}

//EDITOR ASYNCH  REQUEST TYPES:
export const ADD = "ADD"
export const UPDATE = "UPDATE"

//EDITOR ASYNCH REQUEST TYPES:
export const EDITOR_REQUEST_TYPES = {
    ADD,
    UPDATE
}

export const AUTH = {
    AUTH_REQUEST,
    AUTH_RESPONSE,
    LOGOUT
}

export const APP = {
    APP_LOAD_REQUEST,
    APP_LOAD_RESPONSE
}

export const SETTINGS = {
    SETTINGS_REQUEST,
    SETTINGS_RESPONSE
}

export const PROFILE = {
    PROFILE_REQUEST,
    PROFILE_RESPONSE
}

//--------------------------POSTS---------------------------------

export const POSTS = {
    POSTS_REQUEST,
    POSTS_RESPONSE
}

//POSTS ASYNCH  REQUEST TYPES:
export const ALL = "ALL"
export const FOLLOW = "FOLLOW"
export const FAVOURITE = "FAVOURITE"

//POSTS ASYNCH REQUEST TYPES:
export const POSTS_REQUEST_TYPES = {
    ALL,
    FOLLOW,
    FAVOURITE
}


//is userd when try follow or unfolloe to the other user
export const FOLLOW_USER = {
    //for action types
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_RESPONSE,
    //params for action switch
    FOLLOW,
    UNFOLLOW
}

//is used for post favouriting process
export const POST_FAVOURITING = {
    //action type, shows for BOTH: favourited OR unfavourited
    POST_FAVOURITED,

    //asynch mode used in action for switch
    UNFAVOURITE, 
    FAVOURITE
}

