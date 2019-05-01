import { connect } from 'react-redux';
import AppWrapper from './AppWrapper';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

export default connect(mapStateToProps)(AppWrapper);