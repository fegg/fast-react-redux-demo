import * as types from '../../constants/ActionTypes';
import axios from 'axios';

function fetchUsers () {
    return axios.get('/mock/users.json'); 
}

export function getUsers() {
    return function (dispatch) {
        return fetchUsers().then((ret) => {
            if(ret.status === 200) {
                dispatch(setUsers(ret.data));
            }
        });
    };
}

export function setUsers(data) {
    return {
        type: types.SET_USER,
        data
    };
}