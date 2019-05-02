import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser) => dispatch(login(formUser)),
        loginGuest: (formUser) => dispatch(login(formUser)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);