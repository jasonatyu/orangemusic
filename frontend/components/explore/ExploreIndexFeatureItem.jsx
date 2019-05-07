import React from 'react';
import { Link } from 'react-router-dom';

const ExploreIndexFeatureItem = () => (
    <li className='explore-feature-item'>
        <h3>PLAYLIST TAKEOVER</h3>
        <h2>Ride along with Billie Elish as she takes over our In My Room playlist.</h2>
        <Link to="/playlists/1"><img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" /></Link>
    </li>
);

export default ExploreIndexFeatureItem;