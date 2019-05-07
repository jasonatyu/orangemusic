import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexDetailItem = ({ playlist }) => {
    return (
    <li>
            <Link to={`/playlists/${playlist.id}`}><img src={playlist.photoUrl ? playlist.photoUrl : "https://s3-us-west-1.amazonaws.com/orange-music-dev/headphones.png"}
        width="200"/></Link>
        <br />
        <section>
            <h2>{playlist.name}</h2>
            <p>{playlist.description}</p> 
        </section>
    </li>
    );
}

export default PlaylistIndexDetailItem;