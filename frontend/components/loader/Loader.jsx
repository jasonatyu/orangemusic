// iOS-style loader: https://codepen.io/anon/pen/XQLPWW?editors=1100

import React from 'react';

const Loader = ( {isLoading} ) => (
    isLoading ? 
    (<div class="spinner">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
    </div>) : ""
)

export default Loader;