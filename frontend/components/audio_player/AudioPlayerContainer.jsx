import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';
import { playSong, pauseSong, continueSong } from '../../actions/audio_player_actions';

const mapStateToProps = state => {
    return {
        currentSong: state.entities.songs[state.ui.player.currentSongId],
        isPaused: state.ui.player.isPaused
    };
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: (id) => dispatch(playSong(id)),
        pauseSong: () => dispatch(pauseSong()),
        continueSong: () => dispatch(continueSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);