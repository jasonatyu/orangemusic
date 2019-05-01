import React from 'react';
import Splash from './Splash';
import GreetingContainer from './GreetingContainer';

const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return <GreetingContainer />
    } else {
        return <Splash />
    }
};

export default AppWrapper;