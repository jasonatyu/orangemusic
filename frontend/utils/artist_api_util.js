export const fetchUserArtists = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/artists`
    })
);

//todo: add search params
export const fetchArtists = () => (
    $.ajax({
        method: 'GET',
        url: '/api/artists'
    })
);

export const fetchArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists/${artistId}`
    })
);

