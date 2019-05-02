import * as UserAPIUtil from '../utils/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};

//todo: needs filters
export const fetchUsers = () => (dispatch) => (
    UserAPIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
);

export const fetchUser = (userId) => (dispatch) => (
    UserAPIUtil.fetchUser(userId).then((user) => dispatch(receiveUser(userId)))
);



