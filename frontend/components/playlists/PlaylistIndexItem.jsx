import React from 'react';

const PlaylistIndexItem = ({playlist, deletePlaylist}) => (
    <li>
        { playlist.name }
        { playlist.description }
        { playlist.song_ids }
        <button onClick={()=>deletePlaylist(playlist.id)}>Delete Playlist</button>
    </li>
);

export default PlaylistIndexItem;