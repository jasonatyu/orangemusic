import * as PlaylistAPIUtil from '../utils/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylist = (playlist) => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    };
};

export const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    };
};

export const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    };
};

export const fetchUserPlaylists = userId => dispatch => (
    PlaylistAPIUtil.fetchUserPlaylists(userId).then((playlists) => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylists = () => dispatch => (
    PlaylistAPIUtil.fetchPlaylists().then((playlists) => dispatch(receivePlaylists(playlists)))
);

export const createPlaylist = (playlist) => dispatch => (
    PlaylistAPIUtil.createPlaylist(playlist).then((playlist) => dispatch(receivePlaylist(playlist)))
);

export const updatePlaylist = (playlist) => dispatch => (
    PlaylistAPIUtil.updatePlaylist(playlist).then((playlist) => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = (playlistId) => dispatch => (
    PlaylistAPIUtil.deletePlaylist(playlistId).then((playlist) => dispatch(removePlaylist(playlistId)))
);




