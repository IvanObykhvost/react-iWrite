import { AUTH } from './constant';

const initialState = {
    currentUser: null
}

export default function (state = initialState, action) {

    switch (action.type) {       
        case AUTH.CURRENT_USER:
            if(action.data.error){
                return {
                    currentUser: null
                }
            }

            localStorage.setItem('jwt', action.data.user.token);
            return {
                currentUser: action.data.user //state.currentUser
            }

        case AUTH.LOGOUT:
            localStorage.removeItem('jwt');
            return {
                currentUser: null
            }

        default:
            return state;
    }
}