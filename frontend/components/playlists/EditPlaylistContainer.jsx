import { connect } from 'react-redux';
import React from 'react';
import PlaylistForm from './PlaylistForm';
import { updatePlaylist, fetchPlaylist } from '../../actions/playlist_actions';


const mapStateToProps = (state, ownProps) => {
    const defaultPlaylist = { name: "", description: "" };
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || defaultPlaylist;
    const formType = "Edit Playlist";
    return { playlist, formType };
};

const mapDispatchToProps = dispatch => {
    return {
        submitAction: (playlist) => dispatch(updatePlaylist(playlist)),
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    };
};

class EditPlaylistForm extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.playlist.id != this.props.match.params.playlistId) {
            this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render() {
        const { submitAction, formType, playlist } = this.props;
        return (
            <PlaylistForm
                key={playlist.id}
                submitAction={submitAction}
                formType={formType}
                playlist={playlist} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistForm);