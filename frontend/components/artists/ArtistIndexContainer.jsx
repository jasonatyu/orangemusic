import { connect } from 'react-redux';
import ArtistIndex from './ArtistIndex';
import { fetchUserArtists, fetchArtists }  from '../../actions/artist_actions';

const mapStateToProps = state => {
    return {
        artists: Object.values(state.entities.artists),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserArtists: (userId) => dispatch(fetchUserArtists(userId)),
        fetchArtists: () => dispatch(fetchArtists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);