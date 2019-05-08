import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaylistDetailContainer from './PlaylistDetailContainer';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.playlist, photoFile: null, hover: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(e) {
        this.setState({ hover: !this.state.hover });
    }
    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state;
        console.log(playlist);
        if (playlist.name === "") {
            playlist.name = "Untitled Playlist";
        }
        const formData = new FormData();
        formData.append('playlist[name]', playlist.name);
        formData.append('playlist[description]', playlist.description);
        if (this.state.photoFile) {
            formData.append('playlist[photo]', this.state.photoFile);
        }
        if (this.props.formType === "Edit Playlist") {
            this.props.submitAction(formData, playlist.id).then(
                (res) => this.forceUpdate());
        } else {
            this.props.submitAction(formData).then(
                (res) => this.forceUpdate());
        }
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] }, () => {
            let playlist = this.state;
            console.log(playlist);
            if (playlist.name === "") {
                playlist.name = "Untitled Playlist";
            }
            const formData = new FormData();
            formData.append('playlist[name]', playlist.name);
            formData.append('playlist[description]', playlist.description);
            formData.append('playlist[photo]', this.state.photoFile);
            if (this.props.formType === "Edit Playlist") {
                this.props.submitAction(formData, playlist.id).then(
                    (res) => this.forceUpdate());
            } else {
                this.props.submitAction(formData).then(
                    (res) => this.forceUpdate());
            }
        } );
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    render() {
        const { formType } = this.props;
        return (
            <div className='playlist-display'>
                <form className='playlist-form' onSubmit={this.handleSubmit}>
                    <label className="upload-photo-label" htmlFor="upload-photo" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        {this.state.hover? <i className="fa fa-camera"></i> : ""}
                        <img className={this.state.hover ? "photo-hover" : ""}src={this.props.playlist.photoUrl ? this.props.playlist.photoUrl : "https://s3-us-west-1.amazonaws.com/orange-music-dev/headphones.png"} width="60" height="60" />
                    </label>
                    <input type="file" onChange={this.handleFile} id="upload-photo" />
                    <section id='playlist-info'>
                        <input className='playlist-name' type="text" onChange={this.handleChange("name")} onBlur={this.handleSubmit} value={this.state.name} placeholder="Untitled Playlist" autoFocus={formType === 'Create Playlist'} />
                        <input className='playlist-description' type="text" onChange={this.handleChange("description")} onBlur={this.handleSubmit} value={this.state.description} placeholder="Description" />
                    </section>
                </form>
                <PlaylistDetailContainer />
            </div>
        );
    }
}

export default withRouter(PlaylistForm);