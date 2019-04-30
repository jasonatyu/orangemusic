import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';
import GreetingContainer from './GreetingContainer';
import NavigationBar from './NavigationBar';
import SubNavigationBar from './SubNavigationBar';
import Splash from './Splash';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <NavigationBar />
            <SubNavigationBar />
        </header>
        <Route exact path="/" component={Splash} />
    </div>
)

export default App;