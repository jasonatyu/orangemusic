import React from 'react';
import AudioPlayerContainer from '../audio_player/AudioPlayerContainer';
import SearchBar from '../search_bar/SearchBar';

const AuthMainNavBar = () => (
    <div id='auth-main-nav-div'>
        <nav id='auth-main-nav-bar'>
            <AudioPlayerContainer />
        </nav>
        <SearchBar />
    </div>
)

export default AuthMainNavBar;