import React from 'react';

const SongIndexItem = ({ song, deleteUserSong }) => (
    <li>
        {song.title}
        {song.time}
        {song.artist}
        {song.album}
    </li>
)

export default SongIndexItem;