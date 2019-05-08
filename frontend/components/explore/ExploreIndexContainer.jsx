import { connect } from 'react-redux';
import ExploreIndex from './ExploreIndex';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => {
    return {
        featuredPlaylists: Object.values(state.entities.playlists).filter((playlist) => playlist.category === 'featured'),
        topPlaylists: Object.values(state.entities.playlists).filter((playlist) => playlist.category === 'top'),
        categoryPlaylists: Object.values(state.entities.playlists).filter((playlist) => playlist.category === 'category')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaylists: (query) => dispatch(fetchPlaylists(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreIndex);