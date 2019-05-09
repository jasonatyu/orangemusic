import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongMenu from './SongMenu';
import { createPlaylistSong, deletePlaylistSong, createUserSong, deleteUserSong } from '../../actions/song_actions';
import { createPlaylist } from '../../actions/playlist_actions';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { queueSong } from '../../actions/audio_player_actions';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
        currentUserSongs: state.entities.users[state.session.id].song_ids,
        userPlaylists: Object.values(state.entities.playlists).filter((playlist) => playlist.user_id === state.session.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId)),
        deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
        fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
        createUserSong: (userId, songId) => dispatch(createUserSong(userId, songId)),
        deleteUserSong: (userId, songId) => dispatch(deleteUserSong(userId, songId)),
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
        queueSong: (song) => dispatch(queueSong(song))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongMenu));