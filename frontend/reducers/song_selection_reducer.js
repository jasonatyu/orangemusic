import { SELECT_SONG } from '../actions/song_selection_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SELECT_SONG:
            return action.id;
        default:
            return state;
    }
};