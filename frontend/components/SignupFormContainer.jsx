import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);