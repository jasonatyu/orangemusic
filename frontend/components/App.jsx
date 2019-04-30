import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Welcome to Orange Music</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;