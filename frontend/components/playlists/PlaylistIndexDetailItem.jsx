import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexDetailItem = ({ playlist }) => {
    return (
    <li>
        <Link to={`/playlists/${playlist.id}`}><img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png" 
        width="200" height="200"/></Link>
        <br />
        <section>
            <h2>{playlist.name}</h2>
            <p>{playlist.description}</p> 
        </section>
    </li>
    );
}

export default PlaylistIndexDetailItem;