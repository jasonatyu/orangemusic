export const fetchUserAlbums = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/albums`
    })
);

//todo: add search params
export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums'
    })
);

export const fetchAlbum = (albumId) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`
    })
);

