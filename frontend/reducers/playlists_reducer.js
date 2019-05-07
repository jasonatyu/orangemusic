import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST  } from '../actions/playlist_actions';
import { REMOVE_PLAYLIST_SONG } from '../actions/song_actions';

export default (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, { [action.payload.playlist.id]: action.payload.playlist });
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        case REMOVE_PLAYLIST_SONG:
            const songIndex = newState[action.playlistId].song_ids.indexOf(action.songId);
            newState[action.playlistId].song_ids.splice(songIndex, 1);
            return newState;
        default:
            return state;
    }
};