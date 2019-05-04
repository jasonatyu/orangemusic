import { connect } from 'react-redux';
import LibraryMenu from './LibraryMenu';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { openMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
        userPlaylists: Object.values(state.entities.playlists).filter((playlist) => playlist.user_id === state.session.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
        openMenu: (menu) => dispatch(openMenu(menu))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryMenu);