import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';
import { playSong, pauseSong, continueSong, removeQueuedSong } from '../../actions/audio_player_actions';

const mapStateToProps = state => {
    return {
        currentSong: state.ui.player.currentSong,
        isPaused: state.ui.player.isPaused,
        queuedSongs: state.ui.player.queuedSongs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: (song) => dispatch(playSong(song)),
        pauseSong: () => dispatch(pauseSong()),
        continueSong: () => dispatch(continueSong()),
        removeQueuedSong: () => dispatch(removeQueuedSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);