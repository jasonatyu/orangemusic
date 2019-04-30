import React from 'react';
import musicIcon from 'assets/images/music_icon.png';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div id="splash">
        <section id="splash-content">
            <img src="https://www.apple.com/v/apple-music/j/images/overview/icon_itunes_small_2x.png" />
            <h1>Lose yourself in 50 million songs.</h1>
            <button><Link className="signup-link" to="/signup">Try it free</Link></button>
        </section>
    </div>
);

export default Splash;

