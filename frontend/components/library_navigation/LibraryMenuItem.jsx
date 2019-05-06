import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import PlaylistMenuContainer from '../playlist_menu/PlaylistMenuContainer';

class LibraryMenuItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = { menuVisible : false };
        this.handleContextMenuClick = this.handleContextMenuClick.bind(this);
    }

    handleContextMenuClick(e) {
        e.preventDefault();
        this.setState({ menuVisible: !this.state.menuVisible});
    }

    render() {
        const { item, playlist } = this.props;
        return (
            item === 'playlist-item' ?
                (<div className="library-menu-item-div">
                    <NavLink className='library-menu-item' onContextMenu={this.handleContextMenuClick} activeClassName='is-library-active' to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>
                    {this.state.menuVisible ? <PlaylistMenuContainer optionClicked={this.handleContextMenuClick} playlistId={playlist.id}/> : ""} </div>)
                : <NavLink className='library-menu-item' activeClassName='is-library-active' to={`/library/${item.toLowerCase()}`}>{item}</NavLink> 
        )
    }
}

export default LibraryMenuItem;