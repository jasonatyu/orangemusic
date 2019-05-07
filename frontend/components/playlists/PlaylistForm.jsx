import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaylistDetailContainer from './PlaylistDetailContainer';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state; 
        if (playlist.name === "") {
            playlist.nsame = "Untitled Playlist";
        }
        this.props.submitAction(playlist).then((res)=>this.props.history.push(`/playlists/${res.playlist.id}`));
    }

    handleChange(type) {
        return (e) => this.setState({ [type] : e.target.value });
    }

    render() {
        const { formType } = this.props;
        return (
            <div className='playlist-display'>
                <form className='playlist-form' onSubmit={this.handleSubmit}>
                    <img src={this.props.playlist.photoUrl ? this.props.playlist.photoUrl : "https://s3-us-west-1.amazonaws.com/orange-music-dev/headphones.png"} width="60" height="60" />
                        <section id='playlist-info'>
                        <input className='playlist-name' type="text" onChange={this.handleChange("name")} onBlur={this.handleSubmit} value={this.state.name} placeholder="Untitled Playlist" autoFocus={formType==='Create Playlist'} />
                        <input className='playlist-description' type="text" onChange={this.handleChange("description")} onBlur={this.handleSubmit} value={this.state.description} placeholder="Description" />
                        </section>
                </form>
                <PlaylistDetailContainer />
            </div>
        );
    }
}

export default withRouter(PlaylistForm);