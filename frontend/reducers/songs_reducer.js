import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_USER_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';


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
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, action.payload.songs);
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.payload.songs);
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.payload.songs);
        default:
            return state;
    }
};