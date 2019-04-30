import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVER_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = formUser => dispatch => (
    SessionAPIUtil.signup(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const login = formUser => dispatch => (
    SessionAPIUtil.login(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);