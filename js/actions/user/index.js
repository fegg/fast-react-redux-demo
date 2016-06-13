import * as types from '../../constants/ActionTypes';

export function setUser(data) {
    return {
        type: types.SET_USER,
        data: data
    }
}