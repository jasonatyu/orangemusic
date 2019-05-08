import React from 'react';
import { Link } from 'react-router-dom';

const TopResultsItem = (props) => {
    if (props.artist) {
        return (<li className='top-result-item'>
            <Link to={`/artists/${props.artist.id}`}><img src={props.artist.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.artist.name}</h4>
                <p>Artist</p>
            </section>
        </li>)
    } else if (props.album) {
        return (<li className='top-result-item'>
            <Link to={`/albums/${props.album.id}`}><img src={props.album.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.album.title}</h4>
                <p>Album</p>
            </section>
        </li>)
    } else if (props.song) {
        return (<li className='top-result-item'>
            <Link to={`/albums/${props.song.album_id}`}><img src={props.song.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.album.title}</h4>
                <p>Song</p>
            </section>
        </li>)
    } else {
        return null;
    }
};

export default TopResultsItem;