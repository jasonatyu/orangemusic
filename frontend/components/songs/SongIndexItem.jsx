import React from 'react';

class SongIndexItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {active: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState( {active: true} );
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
            <tr className={"songs-body" + (this.props.display === "album" ? " display-album" : "")} onClick={this.handleClick}>
                {display === 'album' ? "" : <td ><img src={song.photoUrl} width="40"/></td>}
                {display === 'album' ? <td className='content'>{idx+1}</td> : ""}
                <td className='content'><p>{title}</p>{display === 'album' ? "" : <p className='song-album'>{song.album}</p>}</td>
                <td className='content'>{song.artist}</td> 
                {display === 'album' ? "" : <td className='content'>{song.year}</td> }          
                <td className='content'>{this.secondsToMinutes(song.time)}</td>
            </tr>
        )
    }
}

export default SongIndexItem;