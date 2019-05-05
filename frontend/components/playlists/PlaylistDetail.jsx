import React from 'react';
import PlaylistDetailItem from './PlaylistDetailItem';

class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.playlistSongs);
    }

    render() {
        const playlistSongs = this.props.playlistSongs.map((song) => <PlaylistDetailItem />)
        return (
            <ul>
                {playlistSongs }
            </ul>
        );
    }
}

export default PlaylistDetail;
