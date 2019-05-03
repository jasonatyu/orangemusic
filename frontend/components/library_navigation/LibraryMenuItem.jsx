import React from 'react';
import { NavLink } from 'react-router-dom';

const LibraryMenuItem = ({ item, playlist }) => (
    item === 'playlist-item' ? 
       <NavLink className='library-menu-item' activeClassName='is-library-active' to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink> 
    :  <NavLink className='library-menu-item' activeClassName='is-library-active' to={`/library/${item.toLowerCase()}`}>{item}</NavLink> 
);
export default LibraryMenuItem;