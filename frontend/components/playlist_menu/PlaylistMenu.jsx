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
           } else if (type === 'edit') {
               this.props.history.push(`/playlists/${this.props.playlistId}`);
            } else if (type === 'delete') {
               this.props.deletePlaylist(this.props.playlistId).then(() => this.props.history.push("/library/playlists"));
           }
           this.props.optionClicked(e); 
       };
    }

    render() {
        return (
            <div>
                <nav id='settings-menu' onContextMenu={(e) => e.preventDefault()}>
                    <ul className='playlist-menu-list'>
                        <li onClick={this.handleClick('create')}><p>&nbsp;&nbsp;&nbsp;New Playlist</p></li>
                        {this.props.display === 'new' ? "" : <li onClick={this.handleClick('edit')}><p>&nbsp;&nbsp;&nbsp;Edit Playlist</p></li>}
                        {this.props.display === 'new' ? "" : <li onClick={this.handleClick('delete')}><p>&nbsp;&nbsp;&nbsp;Delete Playlist</p></li>}
                    </ul>
                </nav> 
            <Dismisser onClick={(e) => this.props.optionClicked(e)} />
            </div>
        )
    }
}

export default PlaylistMenu;