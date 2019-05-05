import React from 'react';

const ArtistIndexItem = ({artist}) => (
    <li className='artist-index-item'>
        <img src={artist.photoUrl} />
        <p>{artist.name}</p>
    </li>
);

export default ArtistIndexItem;