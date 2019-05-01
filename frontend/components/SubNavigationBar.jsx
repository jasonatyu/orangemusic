import React from 'react';
import { Link } from 'react-router-dom';

const SubNavigationBar = () => (
    <nav id="sub-nav-bar">
        <ul id="sub-nav-list">
            <ul className="left-sub-nav">
                <h1><Link className="homepage-link" to="/">Orange Music</Link></h1>
            </ul>
            <ul className="right-sub-nav">
                <li><a className="nav-link" href="#">Overview</a></li>
                <li><a className="nav-link" href="#">Features</a></li>
                <li><Link className="signup-link" to="/signup"><button className="nav-button">Try it free*</button></Link></li>
            </ul>
        </ul>
    </nav>
)

export default SubNavigationBar;