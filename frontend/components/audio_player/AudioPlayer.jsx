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
        this.interval = setInterval(() => 
            this.setState({ currentPlayLocation: this.player.currentTime }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentSong !== undefined) {
            if (prevProps.currentSong === undefined || prevProps.currentSong.id !== this.props.currentSong.id) {
                this.props.playSong(this.props.currentSong.id);
                this.setState({ duration: this.player.duration, currentPlayLocation: 0 }, () => this.changeLocation(0));
            }
            if (!this.props.isPaused) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }
    }

    handleRangeClick(e) {
    }

    handleVolume(e){
        this.setState({ volume: e.currentTarget.value }, () => this.changeVolume(this.state.volume));
    }

    handlePlay(e) {
        if (this.props.currentSong.id && !this.props.isPaused) {
            this.props.pauseSong();
        } else if (this.props.currentSong.id && this.props.isPaused) {
            this.props.continueSong();
        }
    }

    handlePlayLocation(e) {
        const newLocation = parseFloat(e.target.value/100) * parseFloat(this.player.duration);
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
        // console.log(this.state.currentPlayLocation);
        // console.log(this.state.duration);
        const { currentSong, isPaused } = this.props;
        return ( 
            <div className='audio-player'>
                <section className='play-buttons'>
                    <section className='rewind'>
                        <div className='small-rewind-left'></div>
                        <div className='small-rewind-left'></div>
                    </section>
                    { !currentSong || currentSong.id && isPaused ? <div id='play' onClick={this.handlePlay} className='big-play-right'></div> :
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
                        <p id='time-played' className='time'>{this.secondsToMinutes(this.state.currentPlayLocation)}</p>
                        <section className='current-song-info'>
                            <h4 >{currentSong ? currentSong.title : ""}</h4>
                            <p>{currentSong ? currentSong.artist: ""}</p>
                        </section>
                        <p id='time-remaining' className='time'>{currentSong ? `${this.calcTimeRemaining(this.state.currentPlayLocation)}` : "-0:00"}</p>
                    </section>
                    <input type="range" min="0" max="100" onClick={this.handleRangeClick} onChange={this.handlePlayLocation} value={currentSong ? (this.state.currentPlayLocation / this.state.duration)*100 : ""} className="audio-location-range" />
                </section>
            </div>
      
        );
    }
}

export default AudioPlayer;