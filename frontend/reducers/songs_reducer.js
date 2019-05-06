import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_USER_SONG } from '../actions/song_actions';


export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs);
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id] : action.song });
        case REMOVE_USER_SONG:
            const newState = Object.assign({}, state);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
};