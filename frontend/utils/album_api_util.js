export const fetchUserAlbums = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/albums`
    })
);

//todo: add search params
export const fetchAlbums = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/search/albums',
        data: { query }
    })
);

export const fetchAlbum = (albumId) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`
    })
);

