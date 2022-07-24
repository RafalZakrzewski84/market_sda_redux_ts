import { ActionTypes } from '../constants/actionTypes';

export const setAuthState = (authState: boolean) => {
    return {
        type: ActionTypes.SET_AUTH_STATE,
        payload: authState,
    }
}