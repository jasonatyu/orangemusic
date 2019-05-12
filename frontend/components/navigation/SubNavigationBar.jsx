import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SubNavigationBar = () => (
    <nav id="sub-nav-bar">
        <ul id="sub-nav-list">
            <ul className="left-sub-nav">
                <h1><Link className="homepage-link" to="/">Orange Music</Link></h1>
            </ul>
            <section id="center-sub-nav"></section>
            <ul className="right-sub-nav">
                <li><a className="nav-link" href="#" disabled>Overview</a></li>
                <li><HashLink className="nav-link" to="/#features">Features</HashLink></li>
                <li><HashLink className="nav-link" to="/#about">About</HashLink></li>
                <li><Link className="signup-link" to="/signup"><button className="nav-button">Try it free*</button></Link></li>
            </ul>
        </ul>
    </nav>
)

export default SubNavigationBar;