export const fetchUserPlaylists = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/playlists`
    })
);

// todo: add search filters 
export const fetchPlaylists = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/search/playlists',
        data: { query }
    })
);

export const fetchPlaylist = (playlistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/playlists/${playlistId}`
    })
);

export const createPlaylist = (playlist) => (
    $.ajax({
        method: 'POST',
        url: `/api/playlists`,
        data: { playlist }
    })
);

export const updatePlaylist = (playlist) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${playlist.id}`,
        data: { playlist }
    })
);

export const deletePlaylist = (playlistId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlistId}`
    })
);