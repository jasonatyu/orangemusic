import React from 'react';
import { Link } from 'react-router-dom';

const ExploreIndexItem = () => (
    <li className='explore-index-item'>
        <Link to="/playlists/1"><img src="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80" /></Link>
        <h4>Top 100: Global</h4>
        <p>Orange Music</p>
    </li>

);

export default ExploreIndexItem;