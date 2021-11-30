import React from 'react';
import Profile from './Profile';
import './Home.css'
import About from './About';
 

const Home = () => {
    return (
        <div className='home-container'>
            <Profile></Profile>
            <About></About>
        </div>
    );
};

export default Home;