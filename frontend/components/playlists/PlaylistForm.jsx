import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaylistDetailContainer from './PlaylistDetailContainer';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //todo: need to make sure the user's songs are loaded??
    }

    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state; 
        if (playlist.name === "") {
            playlist.name = "Untitled Playlist";
        }
        this.props.submitAction(playlist).then((res)=>this.props.history.push(`/playlists/${res.playlist.id}`));
    }

    handleChange(type) {
        return (e) => this.setState({ [type] : e.target.value });
    }

    render() {
        return (
            <div className='playlist-display'>
                <form className='playlist-form' onSubmit={this.handleSubmit}>
                    <section>
                        <img src={this.props.playlist.photoUrl ? this.props.playlist.photoUrl : "https://images.unsplash.com/photo-1485170536212-67180b105ff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"} width="60" height="60" />
                        <input className='playlist-name' type="text" onChange={this.handleChange("name")} value={this.state.name} placeholder="Untitled Playlist" />
                        <br />
                        <input className='playlist-description' type="text" onChange={this.handleChange("description")} value={this.state.description} placeholder="Description" />
                    </section>
                    <input type="submit" value="Done"/>
                </form>
                <PlaylistDetailContainer />
            </div>
        );
    }
}

export default withRouter(PlaylistForm);