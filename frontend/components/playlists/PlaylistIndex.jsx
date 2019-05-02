import React from 'react';
import PlaylistIndexItem from './PlaylistIndexItem';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.currentUserId);
    }

    render() {
        const playlists = this.props.playlists.map((playlist) => <PlaylistIndexItem key={playlist.id} playlist={playlist} deletePlaylist={this.props.deletePlaylist} /> )
        return (
            <ul>
                { playlists }
            </ul>
        );
    }
}

export default PlaylistIndex;