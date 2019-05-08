import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => {
    return {
        // currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: (query) => dispatch(fetchArtists(query)),
        fetchSongs: (query) => dispatch(fetchSongs(query)),
        fetchAlbums: (query) => dispatch(fetchAlbums(query)),
        fetchPlaylists: (query) => dispatch(fetchPlaylists(query))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));