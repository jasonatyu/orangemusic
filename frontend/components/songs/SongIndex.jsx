import React from 'react';
import SongIndexItem from './SongIndexItem';
import Loading from '../loading/Loading';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disableHover: false};
        this.handleSongClicked = this.handleSongClicked.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserSongs(this.props.currentUserId);
    }

    handleSongClicked(e) {
        this.setState({disableHover: !this.state.disableHover});
    }

    render() {
        if (this.props.songs === undefined || this.props.songs.some((song) => song === undefined)) {
            return <Loading />
        } else {
            const songs = this.props.songs.map((song) => <SongIndexItem songClicked={this.handleSongClicked} key={song.id} song={song} deleteUserSong={this.deleteUserSong} />)
            return (
                <div className='songs-display'>
                    <table className={"song-table" + (this.state.disableHover ? " no-hover" : "")}>
                        <thead className='song-table-header'>
                            <tr className='song-row'>
                                <th></th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Year</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody className="song-table-body">
                            {songs}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default SongIndex;