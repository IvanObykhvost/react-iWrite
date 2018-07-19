//EDITOR ASYNCH  REQUEST TYPES:
export const ADD = "ADD"
export const UPDATE = "UPDATE"

//EDITOR ASYNCH REQUEST TYPES:
export const EDITOR_REQUEST_TYPES = {
    ADD,
    UPDATE
} // Возможно это уже и не нужно

export const POST_INITIALIZE = "POST_INITIALIZE";
export const POST_ON_LOAD = "POST_ON_LOAD";
export const POST_ADD = "POST_ADD";
export const POST_UPDATE = "POST_UPDATE";
export const POST_ERROR = "POST_ERROR";

export const EDDITOR_IN_PROGREES = "EDDITOR_IN_PROGREES";
export const EDDITOR_ERROR = "EDDITOR_ERROR";
export const EDITOR_SUCCESS = "EDITOR_SUCCESS";


export const STATUS = {
    POST_INITIALIZE,
    POST_ON_LOAD,
    POST_ADD,
    POST_UPDATE,
    POST_ERROR,
    
    EDDITOR_ERROR,
    EDDITOR_IN_PROGREES,
    EDITOR_SUCCESS
}
