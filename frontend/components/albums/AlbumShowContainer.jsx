import { connect } from 'react-redux';
import AlbumShow from './AlbumShow';
import { fetchAlbum } from '../../actions/album_actions';
import { queueSongs } from '../../actions/audio_player_actions';

const mapStateToProps = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];
    if (album) {
        const albumSongs = album.song_ids.map((songId) => state.entities.songs[songId]);
        return { album, albumSongs };
    } else {
        return {};
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    queueSongs: (songs) => dispatch(queueSongs(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
