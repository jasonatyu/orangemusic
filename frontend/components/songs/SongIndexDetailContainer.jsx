import { connect } from 'react-redux';
import { fetchUserSongs, deleteUserSong } from '../../actions/song_actions';
import SongIndexDetail from './SongIndex';

const mapStateToProps = (state) => {
    return {
        songs: Object.values(state.entities.songs),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserSongs: (userId) => dispatch(fetchUserSongs(userId)),
        deleteUserSong: (userId) => dispatch(deleteUserSong(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexDetail);