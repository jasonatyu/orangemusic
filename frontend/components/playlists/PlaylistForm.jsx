import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <div>
                <form className='playlist-form' onSubmit={this.handleSubmit}>
                    <section>
                        <img src="https://image.flaticon.com/icons/svg/148/148721.svg" width="60" height="60" />
                        <input className='playlist-name' type="text" onChange={this.handleChange("name")} value={this.state.name} placeholder="Untitled Playlist" />
                        <br />
                        <input className='playlist-description' type="text" onChange={this.handleChange("description")} value={this.state.description} placeholder="Description" />
                    </section>
                    <input type="submit" value="Done"/>
                </form>
            </div>
        );
    }
}

export default withRouter(PlaylistForm);