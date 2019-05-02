export const fetchUserSongs = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/songs`
    })
);

export const createUserSong = (userId, songId) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/songs`,
        data: { song_id: songId }
    })
);

export const deleteUserSong = (userId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/songs/${songId}`
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
        url: `/api/playlists/${playlistId}/songs`,
        data: { song_id: songId }
    })
);

export const deletePlaylistSong = (playlistId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlistId}/songs/${songId}`
    })
);