import { connect } from 'react-redux';
import React from 'react';
import PlaylistForm from './PlaylistForm';
import { updatePlaylist, fetchPlaylist } from '../../actions/playlist_actions';
import { queueSongs } from '../../actions/audio_player_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultPlaylist = { name: "", description: "" };
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || defaultPlaylist;
    const formType = "Edit Playlist";
    const currentUserId = state.session.id;
    let playlistSongs;
    if (playlist.song_ids) {
        playlistSongs = Object.values(playlist.song_ids.map((songId) => state.entities.songs[songId]));
    }   
    return { playlist, formType, currentUserId, playlistSongs };
};

const mapDispatchToProps = dispatch => {
    return {
        submitAction: (playlist, playlistId) => dispatch(updatePlaylist(playlist, playlistId)),
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
        queueSongs: (songs) => dispatch(queueSongs(songs))
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
        const { submitAction, formType, playlist, currentUserId, playlistSongs, queueSongs } = this.props;
        return (
            <PlaylistForm
                key={playlist.id}
                submitAction={submitAction}
                formType={formType}
                playlist={playlist}
                queueSongs={queueSongs}
                playlistSongs={playlistSongs}
                currentUserId={currentUserId ? currentUserId : ""} 
                />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistForm);