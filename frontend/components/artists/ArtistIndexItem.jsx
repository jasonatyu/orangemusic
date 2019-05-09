import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({artist}) => (
    <Link className='artist-index-item' to={`/library/artists/${artist.id}`}>
        <li>
            <img src={artist.photoUrl} />
            <p>{artist.name}</p>
            <div className='artist-divider'></div>
        </li>
    </Link>
);

export default ArtistIndexItem;