import React from 'react';
import { Link } from 'react-router-dom';

const FooterBar = () => (
    <footer id='about' className='footer'>
        <ul className='trial-terms'>
            <li>* New subscribers only. Plan automatically renews after trial.</li>
            <li>1. College students only. Verification required.</li>
            <li>2. Requires Orange Cloud Family Sharing. </li>
        </ul>
        <div className='footer-line'></div>
        <div className='links'>
        <ul className="links-list">
            <li>About</li>
                <a href="https://github.com/jasonatyu/orangemusic" target="_blank"><i className="fab fa-github"></i>GitHub</a>
                <a href="https://www.linkedin.com/in/jasonhyu/" target="_blank"><i className="fab fa-linkedin"></i>LinkedIn</a>
        </ul>
        </div>
        <div className='footer-line'></div>
        <section>
            <p>Copyright © 2019 Orange Music Inc. All rights reserved.</p>
        </section>
    </footer>
);

export default FooterBar; 

