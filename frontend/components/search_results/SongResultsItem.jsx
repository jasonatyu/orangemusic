import React from 'react';
import { Link } from 'react-router-dom';

const SongResultsItem = () => (
    <li className='song-result'>
        <div className='divider'></div>
        <Link><img src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/taylorswift.png"></img></Link>
        <section className='song-result-info'>
            <h4>Taylor Swift</h4>
            <p>Artist</p>
        </section>
    </li>
);

export default SongResultsItem;