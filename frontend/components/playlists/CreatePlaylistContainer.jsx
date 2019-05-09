import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { createPlaylist } from '../../actions/playlist_actions';


const mapStateToProps = state => {
    const playlist = {name: "", description: ""};
    const formType = "Create Playlist";
    const currentUserId = state.session.id;
    return { playlist, formType, currentUserId };
};

const mapDispatchToProps = dispatch => {
    return {
        submitAction: (playlist) => dispatch(createPlaylist(playlist))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);