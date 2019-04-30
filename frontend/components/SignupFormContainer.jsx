import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup, receiveErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);