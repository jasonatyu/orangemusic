import React from 'react';

const ArtistIndexItem = ({artist}) => (
    <li>
        {artist.name}
        {artist.description}
    </li>
);

export default ArtistIndexItem;