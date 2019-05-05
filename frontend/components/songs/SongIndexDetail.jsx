import React from 'react';
import SongIndexDetailItem from './SongIndexDetailItem';

class SongIndexDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserSongs(this.props.currentUserId);
    }

    render() {
        const songs = this.props.songs.map((song) => <SongIndexDetailItem key={song.id} song={song} deleteUserSong={this.deleteUserSong} />)
        return (
            <div className='songs-display'>
                <table className='song-table'>
                    <tbody className='song-table-body'>
                        {songs}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SongIndexDetail;