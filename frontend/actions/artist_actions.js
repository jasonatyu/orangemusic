import * as ArtistAPIUtil from '../utils/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    };
};

export const receiveArtists = (artists) => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    };
};

export const fetchArtist = artistId => dispatch => (
    ArtistAPIUtil.fetchArtist(artistId).then((artist) => dispatch(receiveArtist(artist)))
);

export const fetchArtists = () => dispatch => (
    ArtistAPIUtil.fetchArtists().then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchUserArtists = userId => dispatch => (
    ArtistAPIUtil.fetchUserArtists(userId).then((artists) => dispatch(receiveArtists(artists)))
);