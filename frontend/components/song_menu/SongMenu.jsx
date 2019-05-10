import React from 'react';
import Dismisser from '../dismisser/Dismisser'; // Dismisser for detecting a click outside of a component: https://codesandbox.io/s/yqwrvky7nj

class SongMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayPlaylists: false}
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddSongToPlaylist = this.handleAddSongToPlaylist.bind(this);
        this.handleAddSongToNewPlaylist = this.handleAddSongToNewPlaylist.bind(this);
    }

    handleClick(type) {
        return (e) => {
            if (type === 'add') {
            } else if (type === 'show') {
                this.props.history.push(`/albums/${this.props.song.album_id}`);
            } else if (type === 'delete') {
                this.props.deleteUserSong(this.props.currentUserId, this.props.song.id);
            } else if (type === 'delete-from-playlist') {
                this.props.deletePlaylistSong(this.props.match.params.playlistId, this.props.song.id);
            } else if (type === 'add-to-library') {
                this.props.createUserSong(this.props.currentUserId, this.props.song.id);
            } else if (type === 'play-next') {
                this.props.queueSong(this.props.song);
            }
            this.props.optionClicked(e);
        };
    }

    handleMouseEnter(e) {
        this.setState({displayPlaylists: !this.state.displayPlaylists});
    }

    handleAddSongToPlaylist(playlistId) {
        return (e) => this.props.createPlaylistSong(playlistId, this.props.song.id );
    }

    handleAddSongToNewPlaylist(e) {
        const formData = new FormData();
        formData.append('playlist[name]', "Untitled Playlist");
        formData.append('playlist[description]', " ");
        this.props.createPlaylist(formData).then((res) => this.props.createPlaylistSong(res.payload.playlist.id, this.props.song.id));
    }

    render() {
        const userPlaylists = this.props.userPlaylists.map((playlist) => <li key={playlist.id} onClick={this.handleAddSongToPlaylist(playlist.id)}>{playlist.name}</li>);
        return (
            <div>
                <nav className='song-settings-menu' onContextMenu={(e) => e.preventDefault()}>
                    <ul className='song-menu-list'>
                        <li className='add-playlist-item' onMouseEnter={this.handleMouseEnter}>Add to Playlist <span className='triangle'>&#9658;</span>
                         {this.state.displayPlaylists ? (<ul className='add-playlist-list'>
                                <li onClick={this.handleAddSongToNewPlaylist}>New Playlist</li>
                                    { userPlaylists }
                            </ul>) : ""}
                        </li>
                        <li onClick={this.handleClick('play-next')}>Play Next</li> 
                        <li onClick={this.handleClick('show')}>Show Album in Library</li>
                       { this.props.display === 'playlist' && this.props.currentPlaylist.user_id === this.props.currentUserId  ? 
                        <li onClick={this.handleClick('delete-from-playlist')}>Delete From Playlist</li> : null }
                        {this.props.display !== 'playlist' && this.props.currentUserSongs.includes(this.props.song.id) ?
                            <li onClick={this.handleClick('delete')}>Delete From Library</li> 
                            : <li onClick={this.handleClick('add-to-library')}>Add to Library</li>}
                    </ul>
                </nav>
                <Dismisser onClick={(e) => this.props.optionClicked(e)} />
            </div>
        )
    }
}

export default SongMenu;