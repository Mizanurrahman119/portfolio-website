import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className='service component_space'>
            
            <div className='heading'>
                <h1 className='heading'>My Skills</h1>
                <p className='heading p_color'>There are many variations of passages of lorem Ipsume available</p>
                <p className='heading p_color'>But the majority have suffered alteration</p>
            </div>

            <div className='container'>
                <div className='row row-cols-3'>
                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fas fa-layer-group"></i>
                            </div>
                            <div className='p_details'>
                                <h4> Web Development</h4>
                                <p className='p_details'>Web development is the work involved in developing a website for the Internet a private network.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fas fa-layer-group"></i>
                            </div>
                            <div className='p_details'>
                                <h4> Front End</h4>
                                <p className='p_details'>The use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fas fa-server"></i>
                            </div>
                            <div className='p_details'>
                                <h4>Back End</h4>
                                <p className='p_details'>Backend Development is also known as server-side development. It is everything that the users</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fab fa-react"></i>
                            </div>
                            <div className='p_details'>
                                <h4>React js</h4>
                                <p className='p_details'>Backend Development is also known as server-side development. It is everything that the users</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fab fa-node-js"></i>
                            </div>
                            <div className='p_details'>
                                <h4>Node js</h4>
                                <p className='p_details'>Node.js is an open-source, back-end js runtime environment that runs on the V8 engine</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='service_box pointer'>
                            <div className='icon'>
                            <i class="fab fa-bootstrap"></i>
                            <div className='p_details'>
                                <h4>Bootstrap</h4>
                                <p className='p_details'>It is a free and open-source CSS framework at responsive,front-end web development.</p>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;