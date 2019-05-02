import React from 'react';
import Splash from '../splash/Splash';
import GreetingContainer from '../greeting/GreetingContainer';
import SubNavigationBar from '../navigation/SubNavigationBar';
import AuthSubNavBar from '../auth_navigation/AuthSubNavBar';
import AuthMainNavBar from '../auth_navigation/AuthMainNavBar';
import Loader from '../loader/Loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/route_util';
import PlaylistIndexContainer from '../playlists/PlaylistIndexContainer';
import SongIndexContainer from '../songs/SongIndexContainer';
import ArtistIndexContainer from '../artists/ArtistIndexContainer';
import AlbumIndexContainer from '../albums/AlbumIndexContainer';
import LibraryMenuContainer from '../library_navigation/LibraryMenuContainer';

const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return (
            <>
            <GreetingContainer />   
            <AuthMainNavBar />
            <AuthSubNavBar /> 
            <Route path={["/library", "/"]} component={LibraryMenuContainer} /> 
            <ProtectedRoute path="/library/playlists" component={PlaylistIndexContainer} />
            <ProtectedRoute path="/library/songs" component={SongIndexContainer} />
            <ProtectedRoute path="/library/artists" component={ArtistIndexContainer} />
            <ProtectedRoute path="/library/albums" component={AlbumIndexContainer} />
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