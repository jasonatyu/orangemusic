import React from 'react';

class PlaylistMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
       return (e) => {
           if (type === 'create') {
               this.props.history.push("/playlists/new");
           } else if (type === 'delete') {
               this.props.deletePlaylist(this.props.playlistId).then(() => this.props.history.push("/library"));
           }
       };
    }

    render() {
        return (
            <nav id='settings-menu'>
                <ul className='playlist-menu-list'>
                    <li onClick={this.handleClick('create')}>New Playlist</li>
                    <li onClick={this.handleClick('delete')}>Delete Playlist</li>
                </ul>
            </nav> 
        )
    }
}

export default PlaylistMenu;