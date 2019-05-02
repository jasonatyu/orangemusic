import React from 'react';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NavigationBar from './navigation/NavigationBar';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './app_wrapper/AppWrapperContainer';

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