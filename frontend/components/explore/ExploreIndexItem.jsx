import React from 'react';
import { Link } from 'react-router-dom';

const ExploreIndexItem = (props) => {

    if (props.artist) {
        return (
            <li className='explore-index-item explore-index-item-artist'>
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
                <p>{props.album.artist}</p>
            </li>
        )
    } else {
        return (
            <li className='explore-index-item'>
                <Link to={`/playlists/${props.playlist.id}`}><img src={props.playlist.photoUrl ? props.playlist.photoUrl : "https://s3-us-west-1.amazonaws.com/orange-music-dev/headphones.png"} /></Link>
                    <h4>{props.playlist.name}</h4>
                    <p>Orange Music</p>
                </li>
        )
    }
};
        
export default ExploreIndexItem;