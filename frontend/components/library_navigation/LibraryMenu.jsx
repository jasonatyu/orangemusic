import React from 'react';
import LibraryMenuItem from './LibraryMenuItem';
import PlaylistMenuItem from './PlaylistMenuItem';

class LibraryMenu extends React.Component {
    
    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
    }

    render() {
        // const userPlaylists = this.props.userPlaylists.map((playlist) => <PlaylistMenuItem key={playlist.id} playlist={playlist} />)

        return (
            <section id="library-menu">
                <h1>Library</h1>
                <ul>
                    <LibraryMenuItem item="Playlists" />
                    <LibraryMenuItem item="Artists" />
                    <LibraryMenuItem item="Albums" />
                    <LibraryMenuItem item="Songs" />
                </ul>
                <br />
                <br />
                <h1>Playlists</h1>
                <ul>
                </ul>
            </section>
        )
    }
}

export default LibraryMenu;