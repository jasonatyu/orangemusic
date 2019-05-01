import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';
import NavigationBar from './NavigationBar';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './AppWrapperContainer';

const App = () => (
    <div>
        <header id="header">
            <NavigationBar />
        </header>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={AppWrapperContainer} />
    </div>
)

export default App;