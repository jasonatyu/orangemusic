import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this);
    }

    componentDidUpdate() {
        console.log("in here");
        if (this.props.currentSongId && !this.props.isPaused) {
            this.player.play();
        } else if (this.props.currentSongId && this.props.isPaused) {
            this.player.pause();
        }
    }

    handlePlay(e) {
        if (!this.props.currentSongId) {
            this.props.playSong(1);
        } else if (this.props.currentSongId && !this.props.isPaused) {
            this.props.pauseSong();
        } else if (this.props.currentSongId && this.props.isPaused) {
            this.props.continueSong();
        }
    }

    render() {
        return ( 
            <div className='audio-player'>
                <section className='play-buttons'>
                    <section className='rewind'>
                        <div className='small-rewind-left'></div>
                        <div className='small-rewind-left'></div>
                    </section>
                    { !this.props.currentSongId || this.props.currentSongId && this.props.isPaused ? <div id='play' onClick={this.handlePlay} className='big-play-right'></div> :
                        <i onClick={this.handlePlay} className="fas fa-pause"></i> }
                    <section className='forward'>
                        <div className='small-forward-right'></div>
                        <div className='small-forward-right'></div>
                    </section>
                </section>
                <section className='main-player'>
                    <audio ref={ref => this.player = ref} src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/taylor-swift-sample.m4a"/>
                    <img src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/SOS.png"/>
                    <section className='current-song-detail'>
                        <p>Time</p>
                        <section className='current-song-info'>
                            <h4>I Don't Dance (Without You)</h4>
                            <p>Matoma</p>
                        </section>
                    <p>Time Left</p>
                    </section>
                </section>
            </div>
      
        );
    }
}

export default AudioPlayer;