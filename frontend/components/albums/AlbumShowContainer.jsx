import { connect } from 'react-redux';
import AlbumShow from './AlbumShow';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];
    const albumSongs = album.song_ids.map((songId) => state.entities.songs[songId]);
    return { album, albumSongs };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
