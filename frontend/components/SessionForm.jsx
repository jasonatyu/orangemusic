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
            <div>
                <ul>
                    { errors }
                </ul>
                <form onSubmit={this.handleSubmit} >
                    <label>First Name:
                        <input type="text" onChange={this.handleChange('firstname')} value={this.state.firstname} />
                    </label>
                    <label>Last Name:
                        <input type="text" onChange={this.handleChange('lastname')} value={this.state.lastname} />
                    </label>
                    <label>Email:
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                    </label>
                    <input type="submit" value={this.state.formType} />
                </form>
                {this.state.formType === 'signup' ? <Link to="/login">Log In</Link> : <Link to="/signup">Log In</Link>}
            </div>
        );
    }
}

export default SessionForm;