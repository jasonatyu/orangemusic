import React from 'react';
import SongMenuContainer from '../song_menu/SongMenuContainer';
import { selectSong } from '../../actions/song_selection_actions';
import { playSong } from '../../actions/audio_player_actions';
import { connect } from 'react-redux';

class SongIndexItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {menuVisible: false, hoverSong: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSongPlay = this.handleSongPlay.bind(this);
    }

    handleSongPlay(e) {
        console.log('double click');
        this.props.playSong(this.props.song.id);
    }

    handleSelection(e) {
        this.props.selectSong(this.props.song.id);
    }

    handleClick(e) {
        this.setState({menuVisible: !this.state.menuVisible});
    }

    handleMouseEnter(e){
        this.setState({ hoverSong: true });
    }

    handleMouseLeave(e) {
        this.setState({ hoverSong: false });
    }

    secondsToMinutes(time) {
        let seconds = time;
        let minutes = Math.floor(time/60);
        seconds = (seconds - minutes * 60).toString().padStart(2,'0'); 
        return `${minutes}:${seconds}`;
    }

    render() {
        const { song, display, idx } = this.props;
        let title;
        if (display === 'album') {
        title = `${song.title}`;
        } else {
            title = `${song.title}`;
        }
        return (
            <tr onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleSelection} onDoubleClick={this.handleSongPlay} key={song.id} className={"songs-body" + (this.props.display === "album" ? " display-album" : " display-other") + (this.props.songId === song.id ? " selected" : "")}>
                {display === 'album' ? "" : <td><img src={song.photoUrl} width="40"/></td>}
                {display === 'album' ? <td className='content'>{idx+1}</td> : ""}
                <td className='content'><p>{title}</p>{display === 'album' ? "":<p className='song-album'>{song.album}</p>}</td>
                <td className='content'>{song.artist}</td> 
                {display === 'album' ? "" : <td className='content'>{song.year}</td> }          
                <td className='content last-item' onClick={this.handleClick}>
                    {this.state.hoverSong ? <span className={this.props.songId === song.id ? 'show-hover-selected' : 'show-hover' }>•••</span> : <span>{this.secondsToMinutes(song.time)}</span>}
                    {this.state.menuVisible ? < SongMenuContainer optionClicked={this.handleClick} song={song} display={this.props.display} /> : ""}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        songId: state.ui.song
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectSong: (id) => dispatch(selectSong(id)),
        playSong: (id) => dispatch(playSong(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);