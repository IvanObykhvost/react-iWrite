import { EDITOR,EDITOR_REQUEST_TYPES } from '../constant/constant';
import api from "../api";


//USE only whene try to ADD NEW post (NO need to download post)
export function editorEmptyPostInitialize() {
    return {
        type: EDITOR.EMPTY_POST_INITIALIZE
    }
}

//USE only whene try to UPDATE post (need to download post)
export function editorPostRequest() {
    return {
        type: EDITOR.EDITOR_POST_REQUEST,
    }
}

//USE only whene try to UPDATE post (need to download post)
export function editorPostResponse(response) {
    return {
        type: EDITOR.EDITOR_POST_RESPONSE,
        response
    }
}

//USE only when try to UPDATE post (need to download post)
export function editorPost(id) {
    return dispatch => {
        dispatch(editorPostRequest())
        
        return asyncEditorPost(id)           
            .then(response => dispatch(editorPostResponse(response)))
    }    
}


//USED when post fields are cahnged on form , data format {"post_prop_name":"post_prop_value"}
export function editorPostChange(key, value) {
    return {
        type: EDITOR.EDITOR_POST_CHANGE,
        key,
        value
    }
}

//USE only when try to UPDATE post (need to download post)
function asyncEditorPost(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                post: 
                    {
                        id: id, title: 'Title 555', topic: 'Topic 555', tags: ['Tag 555'], message: 'Message 555'
                    }
                  //error: "Server error, post hast been downloaded"
            }
               
            )
        }, 2000);
    })
}








//is used when form is submitted 
export function editorRequest() {
    return {
        type: EDITOR.EDITOR_REQUEST,
    }
}


export function editorResponse(response) {
    return {
        type: EDITOR.EDITOR_RESPONSE,
        response
    }
}

//TYPE CAN BE ADD OR UPDATE
export function editor(post, type) {

    return dispatch => {
        dispatch(editorRequest());
        let response = null;

        switch (type) {
            case EDITOR_REQUEST_TYPES.ADD:
                //here should be asynch add
                //response = api.Posts.create(post)


                response = asyncEdit(post)

            case EDITOR_REQUEST_TYPES.UPDATE:
                //here should be asynch update
                //response = api.Posts.update(post)



                response = asyncEdit(post)            

            default:
                //here should be asynch add
                //response = api.Posts.create(post)


                response = asyncEdit(post)
        }

        response
            .then(response => dispatch(editorResponse(response)))
    }
}



function asyncEdit(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(
                { success: "Editor Success!" }
                //{ error: "Editor Error!" }
            )
        }, 2000);
    })
}

export function editorUnload() {
    return {
        type: EDITOR.EDITOR_UNLOAD
    }
}