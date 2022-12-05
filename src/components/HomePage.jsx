import React from 'react';
import home from '../images/home.png'

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <img src={home} alt="home" style={{height: "250px", width: "250px", marginTop: "50px"}}/>
        </div>
    );
};

export default HomePage;