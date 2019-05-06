import React from 'react';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ValidRoute } from '../utils/route_util';
import AppWrapperContainer from './app_wrapper/AppWrapperContainer';

const App = () => (
    <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ValidRoute path="/" component={AppWrapperContainer} />
    </Switch>
)

export default App;