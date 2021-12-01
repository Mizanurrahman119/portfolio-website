import React from 'react';
import './Project.css';
import project1 from '../../../src/Assets/Home/clinic.jpg'
import project2 from '../../../src/Assets/Home/doctor.jpg'
import project3 from '../../../src/Assets/Home/bike.jpg'
import project4 from '../../../src/Assets/Home/emajohn.jpg'
import project5 from '../../../src/Assets/Home/tour.jpg'

const Project = () => {
    return (
        <div className='project component__space'>
            <div className='heading'>
                <h1 className='heading'>My Latest Projects</h1>
                <p className='heading p_color'>I have a some projects.</p>
                <p className='heading p_color'>But the majority have suffered alteration</p>
            </div>

            <div className='container'>
                <div className='row'>

                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img className='project__img' src={project1} alt="" />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h4 className='project__text'> Development</h4>
                                <h5 className='project__text'> Getting Tickets to the big show</h5>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img className='project__img' src={project2} alt="" />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h4 className='project__text'> Development</h4>
                                <h5 className='project__text'> Getting Tickets to the big show</h5>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img className='project__img' src={project3} alt="" />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h4 className='project__text'> Development</h4>
                                <h5 className='project__text'> Getting Tickets to the big show</h5>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img className='project__img' src={project4} alt="" />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h4 className='project__text'> Development</h4>
                                <h5 className='project__text'> Getting Tickets to the big show</h5>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img className='project__img' src={project5} alt="" />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h4 className='project__text'> Development</h4>
                                <h5 className='project__text'> Getting Tickets to the big show</h5>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;