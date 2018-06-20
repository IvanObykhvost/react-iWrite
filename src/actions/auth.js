import { AUTH } from '../constant/constant';

export function login(auth) {
    return {
        type: AUTH.LOGIN,
        auth
    }
}

export function register(auth) {
    return {
        type: AUTH.REGISTER,
        auth
    }
}