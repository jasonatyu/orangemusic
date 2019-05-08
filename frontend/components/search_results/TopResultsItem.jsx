import React from 'react';
import { Link } from 'react-router-dom';

const TopResultsItem = (props) => {
    if (props.type === "artist") {
        return (<li className='top-result-item top-result-item-artist'>
            <Link to={`/artists/${props.data.id}`}><img src={props.data.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.data.name}</h4>
                <p>Artist</p>
            </section>
        </li>)
    } else if (props.type === "album") {
        return (<li className='top-result-item'>
            <Link to={`/albums/${props.data.id}`}><img src={props.data.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.data.title}</h4>
                <p>Album</p>
            </section>
        </li>)
    } else if (props.type === "song") {
        return (<li className='top-result-item'>
            <Link to={`/albums/${props.data.album_id}`}><img src={props.data.photoUrl}></img></Link>
            <section className='result-info'>
                <h4>{props.data.title}</h4>
                <p>Song</p>
            </section>
        </li>)
    } else {
        return null;
    }
};

export default TopResultsItem;