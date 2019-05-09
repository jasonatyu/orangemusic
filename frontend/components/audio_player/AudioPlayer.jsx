// long press detection: https://stackoverflow.com/questions/48048957/react-long-press-event

import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {volume: 50, currentPlayLocation: 0, duration: 0};
        this.handlePlay = this.handlePlay.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.handlePlayLocation = this.handlePlayLocation.bind(this);

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ currentPlayLocation: this.player.currentTime }), 1000);

        //check if song metadata is loaded before setting duration and resetting song location
        this.player.addEventListener('loadedmetadata', () => {
            this.setState({ duration: this.player.duration, currentPlayLocation: 0 }, () => this.changeLocation(0));
        });

        //check is song has finished playing
        this.player.addEventListener("ended", () => {
            const that = this;
            if (this.props.queuedSongs.length > 0) {
                const song = that.props.queuedSongs[0];
                that.props.playSong(song);
                that.props.removeQueuedSong();
            } else {
                this.props.pauseSong();
                this.setState({ currentPlayLocation: 0 }, () => this.changeLocation(0));
            }
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentSong !== null) {
            if (prevProps.currentSong === null || prevProps.currentSong.id !== this.props.currentSong.id) {
                this.player.src = this.props.currentSong.fileUrl;
            }
            if (!this.props.isPaused) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }
    }

    handleButtonPress(e) {
        const action = e.currentTarget.value;
        this.buttonPressTimer = setTimeout(() => {
            if (action === 'rewind') {
                const currentTime = this.player.currentTime;
                this.player.currentTime = (currentTime >= 5.0) ? currentTime - 5.0 : 0;
            } else if (action === 'fast-forward') {
                this.player.playbackRate = 2.0;
            }
        }, 1000);
    }

    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
        this.player.playbackRate = 1.0;
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
        const { currentSong, isPaused } = this.props;
        return ( 
            <div className='audio-player'>
                <section className='play-buttons'>
                    <button className='rewind' value='rewind'
                        onTouchStart={this.handleButtonPress}
                        onTouchEnd={this.handleButtonRelease}
                        onMouseDown={this.handleButtonPress}
                        onMouseUp={this.handleButtonRelease}
                        onMouseLeave={this.handleButtonRelease}>
                        <div className='small-rewind-left'></div>
                        <div className='small-rewind-left'></div>
                    </button>
                    { !currentSong || currentSong.id && isPaused ? <div id='play' onClick={this.handlePlay} className='big-play-right'></div> :
                        <i onClick={this.handlePlay} className="fas fa-pause"></i> }
                    <button className='forward' value='fast-forward'
                        onTouchStart={this.handleButtonPress}
                        onTouchEnd={this.handleButtonRelease}
                        onMouseDown={this.handleButtonPress}
                        onMouseUp={this.handleButtonRelease}
                        onMouseLeave={this.handleButtonRelease}>
                        <div className='small-forward-right'></div>
                        <div className='small-forward-right'></div>
                    </button>
                    <input type="range" min="0" max="100" onChange={this.handleVolume} value={this.state.volume} className="volume-range" />
                </section>
                <img src={currentSong ? currentSong.photoUrl : "https://s3-us-west-1.amazonaws.com/orange-music-dev/blank_album.png"} />
                <section className='main-player'>
                    <audio ref={ref => this.player = ref} />
                    <section className='current-song-detail'>
                        <p id='time-played' className='time'>{this.secondsToMinutes(this.state.currentPlayLocation)}</p>
                        <section className='current-song-info'>
                            <h4 className={this.props.isPaused ? "" : 'marquee'}><span>{currentSong ? currentSong.title : ""}</span></h4>
                            <p>{currentSong ? currentSong.artist: ""}</p>
                        </section>
                        <p id='time-remaining' className='time'>{currentSong ? `-${this.calcTimeRemaining(this.state.currentPlayLocation)}` : "-0:00"}</p>
                    </section>
                    <input type="range" min="0" max="100" onClick={this.handleRangeClick} onChange={this.handlePlayLocation} value={currentSong ? (this.state.currentPlayLocation / this.state.duration)*100 : "0"} className="audio-location-range" />
                </section>
            </div>
      
        );
    }
}

export default AudioPlayer;