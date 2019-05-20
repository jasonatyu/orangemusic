import { PLAY_SONG, PAUSE_SONG, QUEUE_SONG, CONTINUE_SONG, REMOVE_QUEUED_SONG, QUEUE_SONGS, SHUFFLE_PLAY } from '../actions/audio_player_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { shuffleSongs } from './selectors'

const _nullState = {currentSong: null, isPaused: true, queuedSongs: [], shufflePlay: false};

export default (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case PLAY_SONG:
            return Object.assign({}, state, { currentSong: action.song, isPaused: false });
        case PAUSE_SONG:
            return Object.assign({}, state, { isPaused: true });
        case CONTINUE_SONG:
            return Object.assign({}, state, { isPaused: false });
        case QUEUE_SONG:
            newState.queuedSongs.unshift(action.song);
            return newState;
        case REMOVE_QUEUED_SONG:
            newState.queuedSongs.shift();
            return newState;
        case QUEUE_SONGS:
            const shuffled = shuffleSongs(action.songs);
            for (let i = 0; i < shuffled.length; i++) {
                newState.queuedSongs.push(shuffled[i]);
            }
            return newState;
        case SHUFFLE_PLAY:
            return Object.assign({}, state, { shufflePlay: true });
        case LOGOUT_CURRENT_USER:
            return _nullState;
        default:
            return state;
    }
}