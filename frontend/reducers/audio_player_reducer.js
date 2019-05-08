import { PLAY_SONG, PAUSE_SONG, QUEUE_SONG, CONTINUE_SONG } from '../actions/audio_player_actions';

const _nullState = {currentSongId: null, isPaused: true, queuedSongs: []};

export default (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case PLAY_SONG:
            return Object.assign({}, state, { currentSongId: action.id, isPaused: false });
        case PAUSE_SONG:
            return Object.assign({}, state, { isPaused: true });
        case CONTINUE_SONG:
            return Object.assign({}, state, { isPaused: false });
        case QUEUE_SONG:
            const newState = Object.assign({}, state);
            newState.queuedSongs.append(action.id);
            return newState;
        default:
            return state;
    }
}