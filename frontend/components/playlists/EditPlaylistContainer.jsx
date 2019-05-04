import { connect } from 'react-redux';
import React from 'react';
import PlaylistForm from './PlaylistForm';
import { updatePlaylist, fetchPlaylist } from '../../actions/playlist_actions';


const mapStateToProps = (state, ownProps) => {
    const defaultPlaylist = { name: "", description: "" };
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || defaultPlaylist;
    const playlistSongIds = playlist.song_ids || [];
    const playlistSongs = playlistSongIds.map((songId) => state.entities.songs[songId]);
    const formType = "Edit Playlist";
    return { playlist, formType, playlistSongs };
};

const mapDispatchToProps = dispatch => {
    return {
        submitAction: (playlist) => dispatch(updatePlaylist(playlist)),
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    };
};

class EditPlaylistForm extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylist(parseInt(this.props.match.params.playlistId));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playlist.id != this.props.match.params.playlistId) {
            this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render() {
        const { submitAction, formType, playlist } = this.props;
        return (
            <div>
                <PlaylistForm
                    key={playlist.id}
                    submitAction={submitAction}
                    formType={formType}
                    playlist={playlist} />
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistForm);