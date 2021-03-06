import React from 'react';
import { Link } from 'react-router-dom';
import FooterBar from '../navigation/FooterBar';
import NavigationBar from '../navigation/NavigationBar';
import SubNavigationBar from '../navigation/SubNavigationBar';

const Splash = () => (
    <div id="splash">
        <NavigationBar />
        <SubNavigationBar />
        <section className="splash-content">
            <img src="https://www.apple.com/v/apple-music/j/images/overview/icon_itunes_small_2x.png" width="40" />
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
        <FooterBar />
    </div>
);

export default Splash;

