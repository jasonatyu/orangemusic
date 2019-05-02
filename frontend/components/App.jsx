import React from 'react';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NavigationBar from './navigation/NavigationBar';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './app_wrapper/AppWrapperContainer';
import Splash from './splash/Splash';

const App = () => (
    <div>
        <header id="header">
            <NavigationBar />
        </header>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/" component={AppWrapperContainer} />
    </div>
)

export default App;