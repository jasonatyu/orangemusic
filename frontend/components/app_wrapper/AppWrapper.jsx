import React from 'react';
import Splash from '../splash/Splash';
import AuthSubNavContainer from '../auth_navigation/AuthSubNavContainer';
import AuthMainNavBar from '../auth_navigation/AuthMainNavBar';
import Loader from '../loader/Loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ValidRoute, ProtectedRoute } from '../../utils/route_util';
import SongIndexContainer from '../songs/SongIndexContainer';
import ArtistIndexContainer from '../artists/ArtistIndexContainer';
import AlbumIndexContainer from '../albums/AlbumIndexContainer';
import LibraryMenuContainer from '../library_navigation/LibraryMenuContainer';
import CreatePlaylistContainer from '../playlists/CreatePlaylistContainer';
import EditPlaylistContainer from '../playlists/EditPlaylistContainer';
import PlaylistIndexDetailContainer from '../playlists/PlaylistIndexDetailContainer';
import AlbumShowContainer from '../albums/AlbumShowContainer';
import ExploreIndexContainer from '../explore/ExploreIndexContainer';
import SearchResultsContainer from '../search_results/SearchResultsContainer';
import ArtistShowContainer from '../artists/ArtistShowContainer';

const AppWrapper = ({ loggedIn }) => {
    if (loggedIn) {
        return (
            <div id ='authenticated'>
                <AuthMainNavBar />
                <AuthSubNavContainer />  
                <section id="main-app">
                    <Route path={["/library","/"]} component={LibraryMenuContainer} /> 
                    <ProtectedRoute path="/library/playlists" component={PlaylistIndexDetailContainer} />
                    <ProtectedRoute path="/library/songs" component={SongIndexContainer} />
                    <ProtectedRoute path="/library/artists" component={ArtistIndexContainer} />
                    <ProtectedRoute path="/library/albums" component={AlbumIndexContainer} />
                    <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
                    <ProtectedRoute path="/browse" component={ExploreIndexContainer} />
                    <ProtectedRoute path="/search" component={SearchResultsContainer} />
                    <ProtectedRoute path="/artists/:artistId" component={ArtistShowContainer} />

                    <Switch>
                        <ProtectedRoute path="/playlists/new" component={CreatePlaylistContainer} />
                        <ProtectedRoute path="/playlists/:playlistId" component={EditPlaylistContainer} />
                    </Switch>
                </section>
            </div>
        )
    } else {
        return (
            <>
                <Route path="/" component ={Splash} />
            </>
        )
    }
};

export default AppWrapper;