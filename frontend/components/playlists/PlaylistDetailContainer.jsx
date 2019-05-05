import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistDetail from './PlaylistDetail';

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || [];
    const playlistSongs = playlist.songs;
    return { playlistSongs };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail));