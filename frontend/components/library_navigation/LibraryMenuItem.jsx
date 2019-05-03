import React from 'react';
import { NavLink } from 'react-router-dom';
import PlaylistMenu from '../playlist_menu/PlaylistMenu';

class LibraryMenuItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = { displayMenu: false };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
        e.preventDefault();
        this.setState({displayMenu: !this.state.displayMenu});
    }

    render() {
        const { item, playlist } = this.props;
        return (
            item === 'playlist-item' ?
                (<div className="library-menu-item-div">
                    <NavLink className= 'library-menu-item' onContextMenu={this.handleMenuClick} activeClassName='is-library-active' to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>
                { this.state.displayMenu ? <PlaylistMenu /> : "" }</div>)
                : <NavLink className='library-menu-item' activeClassName='is-library-active' to={`/library/${item.toLowerCase()}`}>{item}</NavLink> 
        )
    }
}

export default LibraryMenuItem;