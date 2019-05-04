import { connect } from 'react-redux';
import PlaylistDetail from './PlaylistDetail';

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId] || [];
    const playlistSongIds = playlist.song_ids || [];
    const playlistSongs = playlistSongIds.map((songId) => state.entities.songs[songId]);
    return playlistSongs;
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);