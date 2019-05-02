import React from 'react';
import Splash from '../splash/Splash';
import GreetingContainer from '../greeting/GreetingContainer';
import SubNavigationBar from '../navigation/SubNavigationBar';
import Loader from '../loader/Loader';


const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return (
            <>
                <GreetingContainer />
                <Loader isLoading={true} />
            </>
        )
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