import React from 'react';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './app_wrapper/AppWrapperContainer';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <Route path="/" component={AppWrapperContainer} />
        </Switch>
    </div>
)

export default App;