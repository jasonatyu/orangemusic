import { connect } from 'react-redux';
import LibraryMenuItem from './LibraryMenuItem';
import { openMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: (menu) => dispatch(openMenu(menu))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryMenuItem);