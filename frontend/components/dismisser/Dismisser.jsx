// Dismisser for detecting a click outside of a component: https://codesandbox.io/s/yqwrvky7nj

import React from 'react';

const Dismisser = ({ onClick }) => <div onClick={onClick} style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 100,
}} />

export default Dismisser;