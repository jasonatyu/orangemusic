import React from 'react';

const AlbumIndexItem = ({album}) => (
    <li>
        {album.title}
        {album.year}
        {album.category}
        {album.description}
        {album.artist}
    </li>
)

export default AlbumIndexItem;