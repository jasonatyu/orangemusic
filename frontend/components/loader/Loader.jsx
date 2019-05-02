// iOS-style loader: https://codepen.io/anon/pen/XQLPWW?editors=1100

import React from 'react';

const Loader = ( {isLoading} ) => (
    isLoading ? 
    (<div className="spinner">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
    </div>) : ""
)

export default Loader;