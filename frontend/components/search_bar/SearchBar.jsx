import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            this.props.clearResults();
            this.props.fetchArtists(e.target.value);
            this.props.fetchAlbums(e.target.value);
            this.props.fetchSongs(e.target.value);
            this.props.fetchPlaylists(e.target.value);
            this.props.history.push("/search");
        }
    }

    render() {
        return (
            <div id='search-bar-div'>
                <span><i className="fas fa-search"></i></span><input type="text" id='search-bar' autoComplete="off" placeholder="Search" onKeyDown={this.handleEnter}/>
            </div>
        )
    }
}

export default SearchBar;