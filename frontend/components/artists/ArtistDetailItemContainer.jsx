import { connect } from 'react-redux';
import ArtistDetailItem from './ArtistDetailItem';
import { queueSongs } from '../../actions/audio_player_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        albumSongs: state.entities.albums[ownProps.album.id].song_ids.map((songId) => state.entities.songs[songId])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        queueSongs: (songs) => dispatch(queueSongs(songs))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetailItem);