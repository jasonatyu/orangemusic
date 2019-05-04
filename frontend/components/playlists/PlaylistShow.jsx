import React from 'react';

class PlaylistShow extends React.Component {

    componentDidMount() {
        this.props.fetchPlaylist(this.props.playlist.id);
    }

    render() {
        const { playlist } = this.props;
        return (
            <div className='playlist-form'>
                <section>
                    <img src="https://image.flaticon.com/icons/svg/148/148721.svg" width="60" height="60" />
                    <h2 className='playlist-name'>{playlist.name}</h2>
                    <br />
                    <p className='playlist-description'>{playlist.description}</p>
                </section>
            </div>
        );
    }
}

export default PlaylistShow;