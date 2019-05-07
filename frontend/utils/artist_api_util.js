export const fetchUserArtists = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/artists`
    })
);

export const fetchArtists = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/artists/search',
        data: { query }
    })
);

export const fetchArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists/${artistId}`
    })
);

