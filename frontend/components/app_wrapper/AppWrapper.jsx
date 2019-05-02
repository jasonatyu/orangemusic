import React from 'react';
import Splash from '../splash/Splash';
import GreetingContainer from '../greeting/GreetingContainer';
import SubNavigationBar from '../navigation/SubNavigationBar';
import AuthSubNavBar from '../auth_navigation/AuthSubNavBar';
import AuthMainNavBar from '../auth_navigation/AuthMainNavBar';
import LibraryMenu from '../library_navigation/LibraryMenu';
import Loader from '../loader/Loader';


const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return (
            <>
                <header>
                    <AuthMainNavBar />
                    <AuthSubNavBar />
                </header>
                <LibraryMenu />
                <GreetingContainer />
                {/* <Loader isLoading={false} />
                <GreetingContainer /> */}
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