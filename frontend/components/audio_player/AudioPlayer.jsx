import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {volume: 50, currentPlayLocation: 0, duration: 0};
        this.handlePlay = this.handlePlay.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.handlePlayLocation = this.handlePlayLocation.bind(this);
        this.handleRangeClick = this.handleRangeClick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ currentPlayLocation: this.player.currentTime }), 800);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        if (this.props.currentSongId && !this.props.isPaused) {
            this.player.play();
        } else if (this.props.currentSongId && this.props.isPaused) {
            this.player.pause();
        }
    }

    handleRangeClick(e) {
    }

    handleVolume(e){
        this.setState({ volume: e.currentTarget.value }, () => this.changeVolume(this.state.volume));
    }

    handlePlay(e) {
        if (!this.props.currentSongId) {
            this.props.playSong(1);
            this.setState({duration: this.player.duration});
        } else if (this.props.currentSongId && !this.props.isPaused) {
            this.props.pauseSong();
        } else if (this.props.currentSongId && this.props.isPaused) {
            this.props.continueSong();
        }
    }

    handlePlayLocation(e) {
        const newLocation = parseFloat(e.target.value/100) * parseFloat(this.player.duration);
        console.log(newLocation);
        console.log((this.state.currentPlayLocation / this.state.duration) * 100);
        this.setState({ currentPlayLocation: newLocation }, () => this.changeLocation(newLocation) );
    }

    changeVolume(volume) {
        const vol = parseFloat((volume/100).toFixed(1));
        this.player.volume = vol;
    }

    changeLocation(location) {
        this.player.currentTime = location;
    }

    secondsToMinutes(time) {
        let seconds = Math.round(time);
        let minutes = Math.floor(time / 60);
        seconds = (seconds - minutes * 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    calcTimeRemaining(time) {
        let seconds = Math.round(time);
        let timeRemaining = Math.round(this.state.duration) - seconds;
        return this.secondsToMinutes(timeRemaining);
    }

    render() {
        console.log(this.state.currentPlayLocation / this.state.duration );
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
                    <input type="range" min="0" max="100" onChange={this.handleVolume} value={this.state.volume} className="volume-range" />
                </section>
                <img src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/SOS.png" />
                <section className='main-player'>
                    <audio ref={ref => this.player = ref} src="https://s3-us-west-1.amazonaws.com/orange-music-dev/seed/taylor-swift-sample.m4a"/>
                    <section className='current-song-detail'>
                        <p className='time'>{this.secondsToMinutes(this.state.currentPlayLocation)}</p>
                        <section className='current-song-info'>
                            <h4>I Don't Dance (Without You)</h4>
                            <p>Matoma</p>
                        </section>
                        <p className='time'>{`-${this.calcTimeRemaining(this.state.currentPlayLocation)}`}</p>
                    </section>
                  <input type="range" min="0" max="100" onClick={this.handleRangeClick} onChange={this.handlePlayLocation} value={ (this.state.currentPlayLocation / this.state.duration)*100 } className="audio-location-range" />
                </section>
            </div>
      
        );
    }
}

export default AudioPlayer;