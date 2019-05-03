import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistMenu from './PlaylistMenu';
import { deletePlaylist } from '../../actions/playlist_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(PlaylistMenu));