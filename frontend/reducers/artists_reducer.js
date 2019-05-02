import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return Object.assign({}, state, { [action.artist.id]: action.artist });
        default:
            return state;
    }
};