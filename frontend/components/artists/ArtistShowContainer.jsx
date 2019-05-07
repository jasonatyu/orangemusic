import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './ArtistShow';

const mapStateToProps = (state, ownProps) => {
    const artist = state.entities.artists[ownProps.match.params.artistId];
    if (artist) {
        const artistAlbums = artist.album_ids.map((albumId) => state.entities.albums[albumId]);
        return { artist, artistAlbums };
    } else {
        return {};
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);