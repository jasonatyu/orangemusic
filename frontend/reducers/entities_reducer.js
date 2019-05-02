import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    playlists: playlistsReducer,
    songs: songsReducer
});

export default entitiesReducer;