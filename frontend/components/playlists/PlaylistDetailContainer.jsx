import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistDetail from './PlaylistDetail';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchUserSongs } from '../../utils/song_api_util';

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];
    if (playlist) {
        const playlistSongs = playlist.song_ids.map((songId) => state.entities.songs[songId]);
        return { playlistSongs };
    }
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail));