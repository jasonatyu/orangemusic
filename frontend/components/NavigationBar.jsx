import React from 'react';
import orangeIcon from 'assets/images/orange-32.png'; 

const NavigationBar = () => (
    <nav id="nav-bar">
        <ul id="nav-list">
            <li><img src={orangeIcon} alt="orange-music-icon" /></li>
        </ul>
    </nav>
)

export default NavigationBar;