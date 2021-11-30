import React from 'react';
import "./About.css"
import aboutImg from "../../../src/Assets/Home/me.png"

const About = () => {
    return (
        <div className='about component_space'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src={aboutImg} alt="" className='about_img' />
                    </div>
                    <div className='col'>
                        <h1 className='about_heading'>About Me</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur fugiat in inventore repellendus quaerat aliquid, fugit sapiente veniam enim beatae!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo saepe laborum aliquam repellat, magni velit voluptatibus quibusdam doloremque, quod ipsam delectus nesciunt molestias accusamus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deleniti saepe accusamus quam sapiente dolore. Distinctio perferendis.</p>
                        <div className='profile-options'>
                         <button className='btn primary-btn'>
                             {" "}
                             Hire Me{" "}
                         </button>
                         <a href="resume.pdf" download='resume resume.pdf'><button className='btn highlighted-btn'>Get Resume</button></a>
                     </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default About;