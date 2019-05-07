import React from 'react';
import SongIndexItem from '../songs/SongIndexItem';
import Loading from '../loading/Loading';

class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.playlistSongs === undefined || this.props.playlistSongs.some((song) => song === undefined)) {
            return <Loading />
        } else {
            const songs = this.props.playlistSongs.map((song) => <SongIndexItem key={song.id} song={song} display='playlist' />)
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
}

export default PlaylistDetail;
