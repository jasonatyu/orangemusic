import { connect } from 'react-redux';
import PlaylistIndexDetail from './PlaylistIndexDetail';
import { fetchUserPlaylists, fetchPlaylists, deletePlaylist } from '../../actions/playlist_actions';


const mapStateToProps = state => {
    return {
        playlists: Object.values(state.entities.playlists),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexDetail);