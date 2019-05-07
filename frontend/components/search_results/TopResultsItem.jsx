import React from 'react';
import { Link } from 'react-router-dom';

const TopResultsItem = () => (
    <li className='top-result-item'>
        <Link><img src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/taylorswift.png"></img></Link>
        <section className='result-info'>
            <h4>Taylor Swift</h4>
            <p>Artist</p>
        </section>
    </li>
);

export default TopResultsItem;