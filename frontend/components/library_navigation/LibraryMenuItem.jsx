import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import PlaylistMenuContainer from '../playlist_menu/PlaylistMenuContainer';

class LibraryMenuItem extends React.Component{
    constructor(props) {
        super(props);
    }

    handleMenuClick(e) {
        e.preventDefault();
    }

    render() {
        const { item, playlist } = this.props;
        return (
            item === 'playlist-item' ?
                (<div className="library-menu-item-div">
                    <NavLink className='library-menu-item' onContextMenu={(e) => { e.preventDefault(); this.props.openMenu('playlist')}} activeClassName='is-library-active' to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>
                   <Menu /> </div>)
                : <NavLink className='library-menu-item' activeClassName='is-library-active' to={`/library/${item.toLowerCase()}`}>{item}</NavLink> 
        )
    }
}

export default LibraryMenuItem;