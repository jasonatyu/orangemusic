import { connect } from 'react-redux';
import { fetchUserSongs, deleteUserSong } from '../../actions/song_actions';
import SongIndex from './SongIndex';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    if (currentUserId) {
        const songs = state.entities.users[currentUserId].song_ids.map((songId)=>state.entities.songs[songId]);
        return { currentUserId, songs };
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserSongs: (userId) => dispatch(fetchUserSongs(userId)),
        deleteUserSong: (userId) => dispatch(deleteUserSong(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);