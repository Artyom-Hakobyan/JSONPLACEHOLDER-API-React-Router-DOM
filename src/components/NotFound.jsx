import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>This page does not exist. Go back to<Link to='/'>Home</Link></h1>
        </div>
    );
};

export default NotFound;