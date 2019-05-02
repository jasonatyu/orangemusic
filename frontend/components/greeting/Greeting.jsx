import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    if (!props.currentUser) {
        return (
            <div>
                <Link to="/signup">Signup</Link>
                <br />
                <Link to="/login">Login</Link>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome {props.currentUser.email}!</h1>
                <button onClick={() => props.logout()}>Logout</button>
            </div>
        )
    }
};

export default Greeting;