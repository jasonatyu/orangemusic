import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistDetail from './PlaylistDetail';

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || [];
    const playlistSongIds = playlist.song_ids || [];
    const playlistSongs = playlistSongIds.map((songId) => state.entities.songs[songId]);
    console.log(playlistSongs);
    return { playlistSongs };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail));