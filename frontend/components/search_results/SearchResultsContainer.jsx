import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { clearResults } from '../../actions/search_actions';

const mapStateToProps = state => {
    return {
        artists: Object.values(state.entities.artists),
        albums: Object.values(state.entities.albums),
        songs: Object.values(state.entities.songs)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearResults: () => dispatch(clearResults())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);