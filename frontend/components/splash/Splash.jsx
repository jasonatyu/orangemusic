import React from 'react';
import musicIcon from 'assets/images/music_icon.png';
import { Link } from 'react-router-dom';
import SubNavigationBar from '../navigation/SubNavigationBar';

const Splash = () => (
    <div id="splash">
        <section className="splash-content">
            <h1>Lose yourself in 50 million songs.</h1>
            <Link className="signup-link" to="/signup"><button className="signup-button">Try it free</button></Link>
        </section>
        <section className="hero parallax">
        </section>
        <section id="features" className="features features-parallax">
            <h1>It hits all the right notes.</h1>
            <h2>Stream 50 million songs ad‑free.</h2>
            <h2>Download your favorite tracks. Play them offline.</h2>
            <h2>Get exclusive and original content.</h2>
            <h2>Listen across all of your devices.</h2>
            <Link className="signup-link" to="/signup"><button className="signup-button">Try it free</button></Link>
        </section>
    </div>
);

export default Splash;

