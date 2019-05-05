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
            <table className='song-table'>
                <thead className='song-table-header'>
                    <tr className='song-row'>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody className='song-table-body'>
                    {songs}
                </tbody>
            </table>
        );
    }
}

export default SongIndex;