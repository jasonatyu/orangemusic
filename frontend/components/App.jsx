import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';
import GreetingContainer from './GreetingContainer';
import NavigationBar from './NavigationBar';
import SubNavigationBar from './SubNavigationBar';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './AppWrapperContainer';

const App = () => (
    <div>
        <header>
            <NavigationBar />
            <SubNavigationBar />
        </header>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route path="/" component={AppWrapperContainer} />
    </div>
)

export default App;