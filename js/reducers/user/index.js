import * as types from '../../constants/ActionTypes';
import initialState from './initialState';

// {
//     type, data
// }
export default function user (state = initialState, action) {
    switch(action.type) {
        case types.SET_USER:
            // object-assign 
            // return Object.assign({}, state, {
            //     users: action.data.users,
            //     usersById: action.data.usersById
            // });
            return {
                ...state,
                users: action.data.users,
                usersById: action.data.usersById
            };
        default:
            return state;
    }
}