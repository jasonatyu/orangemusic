import React from 'react';
import { Link } from 'react-router-dom';

const ExploreIndexItem = (props) => {

    if (props.artist) {
        return (
        <li className='explore-index-item'>
            <Link to={`/artists/${props.artist.id}`}><img src={props.artist.photoUrl}/></Link>
            <h4>{props.artist.name}</h4>
            <p>Artist</p>
        </li>
        )
    } else if (props.album) {
        return (
            <li className='explore-index-item'>
                <Link to={`/albums/${props.album.id}`}><img src={props.album.photoUrl}/></Link>
                <h4>{props.album.title}</h4>
                <p>Album</p>
            </li>
        )
    } else {
        return (
            <li className='explore-index-item'>
                    <Link to="/playlists/1"><img src="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80" /></Link>
                    <h4>Top 100: Global</h4>
                    <p>Orange Music</p>
                </li>
        )
    }
};
        
export default ExploreIndexItem;