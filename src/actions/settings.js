import { SETTINGS } from '../constant/constant';
import api from '../api';

export function settingsRequest() {
    return {
        type: SETTINGS.SETTINGS_REQUEST
    }
}

export function settingsResponse(response) {
    return {
        type: SETTINGS.SETTINGS_RESPONSE,
        response
    }
}

export function settings(data) {
    return dispatch => {
        dispatch(settingsRequest())
        
        return api.Auth.save(data)
            .then(response => dispatch(settingsResponse(response)))
    }
}

