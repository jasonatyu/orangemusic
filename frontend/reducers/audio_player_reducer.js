import { PLAY_SONG, PAUSE_SONG, QUEUE_SONG, CONTINUE_SONG, REMOVE_QUEUED_SONG } from '../actions/audio_player_actions';

const _nullState = {currentSong: null, isPaused: true, queuedSongs: []};

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
        default:
            return state;
    }
}