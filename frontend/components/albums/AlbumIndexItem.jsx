import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album}) => (
    <li>
        <Link to={`/albums/${album.id}`}><img src={album.photoUrl ? album.photoUrl : "https://images.unsplash.com/photo-1485170536212-67180b105ff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
            width="200" height="200" /></Link>
        <br />
        <section className='album-index-item-info'>
            <h2>{album.title}</h2>
            <p> {album.artist}</p>
        </section>
    </li>
)

export default AlbumIndexItem;