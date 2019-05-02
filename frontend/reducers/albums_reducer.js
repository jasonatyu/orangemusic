import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.albums; 
        case RECEIVE_ALBUM:  
            return Object.assign({}, state, {[action.album.id] : action.album })          
        default:
            return state;
    }
}