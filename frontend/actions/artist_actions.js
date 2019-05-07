import * as ArtistAPIUtil from '../utils/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const receiveArtist = (payload) => {
    return {
        type: RECEIVE_ARTIST,
        payload
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

export const fetchArtists = (query) => dispatch => (
    ArtistAPIUtil.fetchArtists(query).then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchUserArtists = userId => dispatch => (
    ArtistAPIUtil.fetchUserArtists(userId).then((artists) => dispatch(receiveArtists(artists)))
);