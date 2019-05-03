import React from 'react';
import LibraryMenuItemContainer from './LibraryMenuItemContainer';
import PlaylistMenuContainer from '../playlist_menu/PlaylistMenuContainer';

class LibraryMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayMenu: false };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    
    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
    }

    handleClick() {
        this.setState({ displayMenu: false });
    }

    handleMenuClick(e) {
        e.preventDefault();
        this.setState({ displayMenu: !this.state.displayMenu });
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
                    <h1 onClick={this.handleClick} onContextMenu={this.handleMenuClick}>Playlists</h1>
                    {this.state.displayMenu ? <PlaylistMenuContainer type="create-playlist" handleOptionClick = {this.handleMenuClick} /> : ""} 
                </div>
                <ul>
                    { userPlaylists }
                </ul>
            </section>
        )
    }
}

export default LibraryMenu;