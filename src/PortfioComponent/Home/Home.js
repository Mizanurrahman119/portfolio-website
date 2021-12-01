import React from 'react';
import Profile from './Profile';
import './Home.css'
import About from './About';
import Service from './Service';
import Project from './Project';
 

const Home = () => {
    return (
        <div className='home-container'>
            <Profile></Profile>
            <About></About>
            <Service></Service>
            <Project></Project>
        </div>
    );
};

export default Home;