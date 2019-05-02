import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthSubNavBar = () => (
    <nav id="auth-sub-nav-bar">
        <ul id="auth-sub-nav-list">
            <NavLink className='nav-link' activeClassName='is-active' to="/library">Library</NavLink>
            <NavLink className='nav-link' activeClassName='is-active' to="/for-you">For You</NavLink>
            <NavLink className='nav-link' activeClassName='is-active' to="/browse">Browse</NavLink>
        </ul>
    </nav>
);

export default AuthSubNavBar;
