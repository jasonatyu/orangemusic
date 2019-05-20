import { SELECT_SONG } from '../actions/song_selection_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SELECT_SONG:
            return action.id;
        case LOGOUT_CURRENT_USER:
            return null;
        default:
            return state;
    }
};