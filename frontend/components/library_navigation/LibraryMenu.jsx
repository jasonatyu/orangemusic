import React from 'react';
import LibraryMenuItemContainer from './LibraryMenuItemContainer';
import PlaylistMenuContainer from '../playlist_menu/PlaylistMenuContainer';
import Menu from '../menu/Menu';

class LibraryMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleContextMenuClick = this.handleContextMenuClick.bind(this);
        this.state = { menuVisible: false };
    }
    
    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
    }

    handleContextMenuClick(e) {
        e.preventDefault();
        this.setState({menuVisible: !this.state.menuVisible});
    }

    render() {
        const userPlaylists = this.props.userPlaylists.map((playlist) => <LibraryMenuItemContainer key={playlist.id} item="playlist-item" playlist={playlist} />)

        return (
            <section id="library-menu">
                <h1>Library</h1>
                <ul>
                    <LibraryMenuItemContainer item="Playlists" />
                    <LibraryMenuItemContainer item="Artists" />
                    <LibraryMenuItemContainer item="Albums" />
                    <LibraryMenuItemContainer item="Songs" />
                </ul>
                <br />
                <br />
                <div className='menu-header'>
                    {this.state.menuVisible ? <PlaylistMenuContainer optionClicked={this.handleContextMenuClick} display='new'/> : "" }
                    <h1 onContextMenu={this.handleContextMenuClick}>Playlists</h1>
                </div>
                <ul>
                    { userPlaylists }
                </ul>
            </section>
        )
    }
}

export default LibraryMenu;