import React from 'react';
import SongMenuContainer from '../song_menu/SongMenuContainer';

class SongIndexItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {menuVisible: false, hoverSong: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
            <tr onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={song.id} className={"songs-body" + (this.props.display === "album" ? " display-album" : " display-other") }>
                {display === 'album' ? "" : <td><img src={song.photoUrl} width="40"/></td>}
                {display === 'album' ? <td className='content'>{idx+1}</td> : ""}
                <td className='content'><p>{title}</p>{display === 'album' ? "":<p className='song-album'>{song.album}</p>}</td>
                <td className='content'>{song.artist}</td> 
                {display === 'album' ? "" : <td className='content'>{song.year}</td> }          
                <td className='content last-item' onClick={this.handleClick}>
                    {this.state.hoverSong ? <span id='show-hover'>•••</span> : <span>{this.secondsToMinutes(song.time)}</span>}
                    {/* <span className={this.state.hoverSong ? 'hide-hover' : ''}>{this.secondsToMinutes(song.time)}</span><span className={this.state.hoverSong ? 'show-hover' : ''}>•••</span> */}
                    {this.state.menuVisible ? < SongMenuContainer optionClicked={this.handleClick} song={song} display={this.props.display} /> : ""}
                </td>
            </tr>
        )
    }
}

export default SongIndexItem;