import React from 'react';
import AudioPlayerContainer from '../audio_player/AudioPlayerContainer';
import SearchBarContainer from '../search_bar/SearchBarContainer';

const AuthMainNavBar = () => (
    <div id='auth-main-nav-div'>
        <nav id='auth-main-nav-bar'>
            <AudioPlayerContainer />
        </nav>
        <SearchBarContainer />
    </div>
)

export default AuthMainNavBar;