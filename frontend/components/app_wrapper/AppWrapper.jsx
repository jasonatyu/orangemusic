import React from 'react';
import Splash from '../splash/Splash';
import GreetingContainer from '../greeting/GreetingContainer';
import SubNavigationBar from '../navigation/SubNavigationBar';

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