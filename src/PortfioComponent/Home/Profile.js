import React from 'react';
import "./Profile.css"
import Typical from 'react-typical'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='navber-container'>
                        <div className='navber'>
                            <a className='nav-item' href="#home">Home</a>
                            <a  className='nav-item' href="#about">About</a>
                            <a className='nav-item' href="#service">Service</a>
                            <a className='nav-item' href="#portfolio">Portfolio</a>
                            <a className='nav-item' href="#contact">Contact Me</a>
                        </div>
                    </div>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.facebook.com/profile.php?id=100008767533101">
                            <i className='fab fa-facebook-square'></i>
                        </a>
                        <a href="https://github.com/Mizanurrahman119 ">  
                            <i className='fab fa-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/md-mizanur-rahman-b31703182/"> 
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href="https://twitter.com/MRMizan36032748">
                            <i className='fab fa-twitter-square'></i>
                        </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Mizanur</span>
                        </span>
                    </div>
                     <div className='profile-details-role'> 
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Dev",
                                    1500,
                                    "Full Stack Developer",
                                    1500,
                                    "MERN Stack Developer",
                                    1500,
                                    "React/React Native Dev",
                                    1500,
                                ]}/>
                            </h1>
                            <span className='profile-role-tagline'>
                                Please knock building application with front and back end operations.
                            </span>
                        </span>
                     </div>
                     <div className='profile-options'>
                         <button className='btn primary-btn'>
                             {" "}
                             Hire Me{" "}
                         </button>
                         <a href="resume.pdf" download='resume resume.pdf'><button className='btn highlighted-btn'>Get Resume</button></a>
                     </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;