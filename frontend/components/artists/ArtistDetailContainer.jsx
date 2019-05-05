import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.entities.artists[ownProps.match.params.artistId],
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistDetail));