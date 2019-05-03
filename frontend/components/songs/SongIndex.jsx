import React from 'react';
import SongIndexItem from './SongIndexItem';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserSongs(this.props.currentUserId);
    }

    render() {
        const songs = this.props.songs.map((song) => <SongIndexItem key={song.id} song={song} deleteUserSong={this.deleteUserSong} />)
        return (
            <ul>
                { songs }
            </ul>
        );
    }
}

export default SongIndex;