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
                <td>{song.title}</td>
                <td>{this.secondsToMinutes(song.time)}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
            </tr>
        )
    }
}

export default SongIndexItem;