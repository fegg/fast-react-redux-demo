import * as types from '../../constants/ActionTypes';

// 必须初始化结构，不然 redux init 的时候会出现 undefined
const initialState = {
    users: [],
    usersById: []
};

export default function user (state = initialState, action) {
    switch(action.type) {
        case types.SET_USER:
            return {
                ...state,
                users: action.data.users,
                usersById: action.data.usersById
            };
        default:
            return state;
    }
}