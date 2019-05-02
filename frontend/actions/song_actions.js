import * as SongAPIUtil from '../utils/song_api_util';

export const RECEIVE_CURRENT_USER_SONGS = 'RECEIVE_CURRENT_USER_SONGS';
export const RECEIVE_CURRENT_USER_SONG = 'RECEIVE_CURRENT_USER_SONG';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_CURRENT_USER_SONG = 'REMOVE_CURRENT_USER_SONG';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receiveCurrentUserSongs = (userId, songs) => {
    return {
        type: RECEIVE_CURRENT_USER_SONGS,
        userId,
        songs 
    };
};

export const receiveCurrentUserSong = (userId, songId) => {
    return {
        type: RECEIVE_CURRENT_USER_SONG,
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

export const removeCurrentUserSong = (userId, songId) => {
    return {
        type: REMOVE_CURRENT_USER_SONG,
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