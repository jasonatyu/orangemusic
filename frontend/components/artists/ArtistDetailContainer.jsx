import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUserId = state.session.id;
    const artist = state.entities.artists[ownProps.match.params.artistId];
    if (artist) {
        const artistAlbums = artist.album_ids.map((albumId) => state.entities.albums[albumId]);
        return {artist, artistAlbums, currentUserId};
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistDetail));