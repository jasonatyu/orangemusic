import React from 'react';
import Splash from './Splash';
import GreetingContainer from './GreetingContainer';
import SubNavigationBar from './SubNavigationBar';

const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return <GreetingContainer />
    } else {
        return (
            <>
                <SubNavigationBar />
                <Splash />
            </>
        )
    }
};

export default AppWrapper;