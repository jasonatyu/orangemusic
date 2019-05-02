import React from 'react';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NavigationBar from './navigation/NavigationBar';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import AppWrapperContainer from './app_wrapper/AppWrapperContainer';
import LibraryMenuContainer from './library_navigation/LibraryMenuContainer';
import PlaylistIndexContainer from './playlists/PlaylistIndexContainer';
import SongIndexContainer from './songs/SongIndexContainer';
import ArtistIndexContainer from './artists/ArtistIndexContainer';
import AlbumIndexContainer from './albums/AlbumIndexContainer';

const App = () => (
    <div>
        <header id="header">
            <NavigationBar />
        </header>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route path="/" component={AppWrapperContainer} />
        <ProtectedRoute path="/library" component={LibraryMenuContainer} />
        <ProtectedRoute path="/library/playlists" component={PlaylistIndexContainer} />
        <ProtectedRoute path="/library/songs" component={SongIndexContainer} />
        <ProtectedRoute path="/library/artists" component={ArtistIndexContainer} />
        <ProtectedRoute path="/library/albums" component={AlbumIndexContainer} />
    </div>
)

export default App;