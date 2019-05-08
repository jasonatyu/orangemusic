import React from 'react';
import { Link } from 'react-router-dom';

const SongResultsItem = ({song}) => (
    <li className='song-result'>
        <div className='divider'></div>
        <Link to={`/albums/${song.album_id}`}>
            <img src={song.photoUrl}></img>
            <section className='song-result-info'>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
            </section>
        </Link>
    </li>
);

export default SongResultsItem;