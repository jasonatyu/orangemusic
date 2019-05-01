import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", firstname: "", lastname: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => this.props.history.push("/"))
            .fail((errors) => this.props.receiveErrors(errors.responseJSON));
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    render() {
        const errors = this.props.errors.session.map((error, idx) => (<li key={idx}>{error}</li>))
        return (
            <div id="session-form-div">
                <form id="session-form" onSubmit={this.handleSubmit} >
                    <section id="form-header">
                        {this.props.formType === 'signup' ? <h1>Create Orange Music ID</h1> : <h1>Sign In</h1>}
                        {this.props.formType === 'signup' ? <Link className="other-session-action" to="/login">Log In</Link> : <Link className="other-session-action" to="/signup">Sign Up</Link>}
                    </section>
                    <div className="form-line"></div>
                    <ul>
                        {errors}
                    </ul>
                    <br />
                    <section id="session-form-input">
                        { this.props.formType === 'signup' ? (
                        <div>
                        <label>First Name </label>
                        <input type="text" onChange={this.handleChange('firstname')} value={this.state.firstname} />
                        <br/>
                        <br />
                        <label>Last Name </label>
                        <input type="text" onChange={this.handleChange('lastname')} value={this.state.lastname} />
                        <br />
                        <br />
                        </div>
                        ) : "" }
                        <label>Email </label>
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
                        <br />
                        <br />
                        <label>Password </label>
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                    </section>
                    <br />
                    <div className="form-line"></div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SessionForm;