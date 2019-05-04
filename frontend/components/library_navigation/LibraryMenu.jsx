import React from 'react';
import LibraryMenuItemContainer from './LibraryMenuItemContainer';
import Menu from '../menu/Menu';

class LibraryMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
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
                    <Menu />
                    <h1 onContextMenu={(e) => { e.preventDefault(); this.props.openMenu('playlist')}}>Playlists</h1>
                </div>
                <ul>
                    { userPlaylists }
                </ul>
            </section>
        )
    }
}

export default LibraryMenu;