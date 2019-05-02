import * as SongAPIUtil from '../utils/song_api_util';

export const RECEIVE_USER_SONGS = 'RECEIVE_CURRENT_USER_SONGS';
export const RECEIVE_USER_SONG = 'RECEIVE_CURRENT_USER_SONG';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_USER_SONG = 'REMOVE_CURRENT_USER_SONG';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receiveUserSongs = (userId, songs) => {
    return {
        type: RECEIVE_USER_SONGS,
        userId,
        songs 
    };
};

export const receiveUserSong = (userId, songId) => {
    return {
        type: RECEIVE_USER_SONG,
        userId, 
        songId
    };
};

export const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song
    };
};

export const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs
    };
};

export const removeUserSong = (userId, songId) => {
    return {
        type: REMOVE_USER_SONG,
        userId,
        songId
    };
};

export const receivePlaylistSong = (playlistId, songId) => {
    return {
        type: RECEIVE_PLAYLIST_SONG,
        playlistId,
        songId
    };
};

export const removePlaylistSong = (playlistId, songId) => {
    return {
        type: REMOVE_PLAYLIST_SONG,
        playlistId,
        songId
    };
};

export const fetchUserSongs = userId => dispatch => (
    SongAPIUtil.fetchUserSongs(userId).then((songs) => dispatch(receiveUserSongs(songs))) 
);


export const createUserSong = (userId, songId) => dispatch => (
    SongAPIUtil.createUserSong(userId, songId).then((song) => dispatch(receiveUserSong(userId, songId)))
);

export const deleteUserSong = (userId, songId) => dispatch => (
    SongAPIUtil.deleteUserSong(userId, songId).then((song) => dispatch(removeUserSong(userId, songId)))
);

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)))
);

export const fetchSong = songId => dispatch => (
    SongAPIUtil.fetchSong(songId).then((song) => dispatch(receiveSong(song)))
);

export const createPlaylistSong = (playlistId, songId) => dispatch => (
    SongAPIUtil.createPlaylistSong(playlistId, songId).then((song) => dispatch(receivePlaylistSong(playlistId, songId)))
);

export const deletePlaylistSong = (playlistId, songId) => dispatch => (
    SongAPIUtil.deletePlaylistSong(playlistId, songId).then((song) => dispatch(removePlaylistSong(playlistId, songId)))
); 