import { connect } from 'react-redux';
import AlbumIndex from './AlbumIndex';
import { fetchUserAlbums, fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = state => {
    return {
        albums: Object.values(state.entities.albums),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId)),
        fetchAlbums: () => dispatch(fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);