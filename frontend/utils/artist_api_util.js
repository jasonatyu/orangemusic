export const fetchUserArtists = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/artists`
    })
);

//todo: add search params
export const fetchArtists = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/artists',
        query: { query }
    })
);

export const fetchArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists/${artistId}`
    })
);

