import { connect } from 'react-redux';
import PlaylistShow from './PlaylistForm';
import { deletePlaylist, updatePlaylist } from '../../actions/playlist_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);