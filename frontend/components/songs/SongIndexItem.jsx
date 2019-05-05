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
        const { song } = this.props;
        return (
            <tr onClick={this.handleClick}>
                <td><img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png" width="40"/></td>
                <td className='content'><p>{song.title}</p><p className='song-album'>{song.album}</p></td>
                <td className='content'>{song.artist}</td>
                <td className='content'>{song.year}</td>
                <td className='content'>{this.secondsToMinutes(song.time)}</td>
            </tr>
        )
    }
}

export default SongIndexItem;