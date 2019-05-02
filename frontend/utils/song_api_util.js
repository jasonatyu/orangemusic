export const fetchUserSongs = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/${userId}/songs`
    })
);

export const createUserSong = (userId, songId) => (
    $.ajax({
        method: 'POST',
        url: `/api/${userId}/songs`,
        data: { songId }
    })
);

export const deleteUserSong = (userID, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/${userId}/songs/${songId}`
    })
);

// todo: update to include search filters 
export const fetchSongs = () => (
    $.ajax({
        method: 'GET',
        url: '/api/songs'
    })
);

export const fetchSong = (songId) => (
    $.ajax({
        method: 'GET',
        url: `/api/songs/${songId}`
    })
);

export const createPlaylistSong = (playlistId, songId) => (
    $.ajax({
        method: 'POST',
        url: `/api/${playlistId}/songs`,
        data: { songId }
    })
);

export const deletePlaylistSong = (playlistId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/${playlistId}/songs/${songId}`
    })
);