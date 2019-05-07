import * as AlbumAPIUtil from '../utils/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = (payload) => {
    return {
        type: RECEIVE_ALBUM,
        payload
    };
};

export const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    };
};

export const fetchAlbum = albumId => dispatch => (
    AlbumAPIUtil.fetchAlbum(albumId).then((album) => dispatch(receiveAlbum(album)))
);

export const fetchAlbums = () => dispatch => (
    AlbumAPIUtil.fetchAlbums().then((albums) => dispatch(receiveAlbums(albums)))
);

export const fetchUserAlbums = userId => dispatch => (
    AlbumAPIUtil.fetchUserAlbums(userId).then((albums) => dispatch(receiveAlbums(albums)))
);