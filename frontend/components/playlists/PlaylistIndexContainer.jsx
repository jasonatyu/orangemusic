import { connect } from 'react-redux';
import PlaylistIndex from './PlaylistIndex';
import { fetchUserPlaylists, fetchPlaylists, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlists: Object.values(state.entities.playlists).filter((playlist) => playlist.user_id === state.session.id),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);