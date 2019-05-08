import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { CLEAR_RESULTS } from '../actions/search_actions';


export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.albums; 
        case RECEIVE_ALBUM:  
            return Object.assign({}, state, { [action.payload.album.id]: action.payload.album });    
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.payload.albums );  
        case CLEAR_RESULTS:
            return {};  
        default:
            return state;
    }
};