import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexDetailItem = ({ playlist }) => {
    return (
    <li>
        <Link to={`/playlists/${playlist.id}`}><img src={playlist.photoUrl ? playlist.photoUrl : "https://images.unsplash.com/photo-1542728116-419ae09c6819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}
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