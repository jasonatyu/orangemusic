import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_USER_SONG } from '../actions/song_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case REMOVE_USER_SONG:
            const newState = Object.assign({}, state);
            const songIndex = newState[action.userId].song_ids.indexOf(action.songId);
            newState[action.userId].song_ids.splice(songIndex, 1);
            return newState;
        default:
            return state;
    }
};