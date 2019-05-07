import React from 'react';
import AudioPlayer from '../audio_player/AudioPlayer';

const AuthMainNavBar = () => (
    <nav id='auth-main-nav-bar'>
        <section id='play-buttons'>
            <div className='small-rewind-left'></div>
            <div className='small-rewind-left'></div>
            <div id='play' className='big-play-right'></div>
            <div className='small-forward-right'></div>
            <div className='small-forward-right'></div>
        </section>
        <section id='audio-player'>
            <AudioPlayer />
        </section>
    </nav>
)

export default AuthMainNavBar;