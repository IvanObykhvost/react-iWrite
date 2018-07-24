import { AUTH } from './constant';

const initialState = {
    currentUser: null,
    error: null,
    success: null
}

export default function (state = initialState, action) {

    switch (action.type) {       
        case AUTH.CURRENT_USER:
            if(action.data.error){
                return {
                    ...state,
                    error: action.data.error,
                    success: null,
                    currentUser: null
                }
            }

            localStorage.setItem('jwt', action.data.user.token);
            return {
                ...state,
                error: null,
                success: action.data.success,
                currentUser: action.data.user //state.currentUser
            }

        case AUTH.LOGOUT:
            localStorage.removeItem('jwt');
            return {
                ...state,
                currentUser: null
            }

        default:
            return state;
    }
}