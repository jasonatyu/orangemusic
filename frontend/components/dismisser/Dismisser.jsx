// Dismisser for detecting a click outside of a component: https://codesandbox.io/s/yqwrvky7nj

import React from 'react';

const Dismisser = ({ onClick }) => <div className='dismisser' onClick={onClick} />

export default Dismisser;