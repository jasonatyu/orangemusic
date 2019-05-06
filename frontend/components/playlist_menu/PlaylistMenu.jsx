import React from 'react';
import Dismisser from '../dismisser/Dismisser'; // Dismisser for detecting a click outside of a component: https://codesandbox.io/s/yqwrvky7nj

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
               this.props.history.push(`/playlists/${this.props.playlistId}`);
            } else if (type === 'delete') {
               this.props.deletePlaylist(this.props.playlistId).then(() => this.props.history.push("/library"));
           }
           this.props.optionClicked(e); 
       };
    }

    render() {
        return (
            <nav id='settings-menu'>
                <ul className='playlist-menu-list'>
                    <li onClick={this.handleClick('create')}>New Playlist</li>
                    {this.props.display === 'new' ? "" : <li onClick={this.handleClick('delete')}>Edit Playlist</li>}
                    {this.props.display === 'new' ? "" : <li onClick={this.handleClick('delete')}>Delete Playlist</li>}
                </ul>
                <Dismisser onClick={(e) => this.props.optionClicked(e) }/>
            </nav> 
        )
    }
}

export default PlaylistMenu;