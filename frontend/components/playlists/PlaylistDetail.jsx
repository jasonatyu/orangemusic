import React from 'react';
import SongIndexItem from '../songs/SongIndexItem';

class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs; 
        if (this.props.playlistSongs) {
            songs = this.props.playlistSongs.map((song) => <SongIndexItem key={song.id} song={song} display='playlist'/>)
        }
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

export default PlaylistDetail;
