import * as AlbumAPIUtil from '../utils/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = (album) => {
    return {
        type: RECEIVE_ALBUM,
        album
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