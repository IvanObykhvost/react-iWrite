import { PAGE } from '../constant/constant';

const initState = {
    page: PAGE.PAGE_HOME
}

export default function (state = initState, action) {

    switch (action.type) {
        case PAGE.PAGE_HOME:
            return {
                ...state,
                page: PAGE.PAGE_HOME
            }

        case PAGE.PAGE_NEW_POST:
            return {
                ...state,
                page: PAGE.PAGE_NEW_POST
            }
        default:
            return state;
    }
}