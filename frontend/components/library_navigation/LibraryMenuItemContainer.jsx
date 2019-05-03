import { connect } from 'react-redux';
import LibraryMenuItem from './LibraryMenuItem';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryMenuItem);