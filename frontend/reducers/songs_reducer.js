import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs);
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id] : action.song });
        default:
            return state;
    }
};