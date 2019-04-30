import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state=[], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}