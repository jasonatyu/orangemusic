import React from 'react';
import orangeIcon from 'assets/images/favicon-32x32.png'; 
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <nav id="nav-bar">
        <ul id="nav-list">
            <li><Link to="/"><img src={orangeIcon} alt="orange-music-icon" /></Link></li>
        </ul>
    </nav>
)

export default NavigationBar;