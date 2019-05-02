import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as UserAPIUtil from './utils/user_api_util';
import * as SongAPIUtil from './utils/song_api_util';
import * as PlaylistAPIUtil from './utils/playlist_api_util';
import * as AlbumAPIUtil from './utils/album_api_util';
import * as ArtistAPIUtil from './utils/artist_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.UserAPIUtil = UserAPIUtil;
    // window.SongAPIUtil = SongAPIUtil;
    // window.PlaylistAPIUtil = PlaylistAPIUtil;
    // window.AlbumAPIUtil = AlbumAPIUtil;
    // window.ArtistAPIUtil = ArtistAPIUtil;
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    ReactDOM.render(<Root store={store} />, root);
});