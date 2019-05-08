import React from 'react';
import { Link } from 'react-router-dom';

const ExploreIndexFeatureItem = ({playlist}) => (
    <li className='explore-feature-item'>
        <h3>{playlist.subheadline}</h3>
        <h2>{playlist.headline}</h2>
        <Link to={`/playlists/${playlist.id}`}><img src={playlist.photoUrl ? playlist.photoUrl : "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"} /></Link>
    </li>
);

export default ExploreIndexFeatureItem;