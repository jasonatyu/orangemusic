import React from 'react';
import AudioPlayerContainer from '../audio_player/AudioPlayerContainer';

const AuthMainNavBar = () => (
    <nav id='auth-main-nav-bar'>
        <section id='audio-player'>
            <AudioPlayerContainer />
        </section>
    </nav>
)

export default AuthMainNavBar;