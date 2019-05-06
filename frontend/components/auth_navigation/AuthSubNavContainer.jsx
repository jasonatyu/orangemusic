import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AuthSubNavBar from './AuthSubNavBar';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(null, mapDispatchToProps)(AuthSubNavBar));