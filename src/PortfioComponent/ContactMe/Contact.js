import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact component__space'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Hire Me</h1>
                            <p className='hire__text white'>I am available for web development. connect with me via phone and an email</p>
                            <p><strong>+8801706719119</strong> or email <strong>niloy719119@gamil.com</strong></p>
                        </div>
                        <div className='input__box'>
                            <input type='text' className='contact name' placeholder='your name *' />
                            <input type='text' className='contact email' placeholder='your email *' />
                            <input type='text' className='contact subject' placeholder='write a subject *' />
                            <textarea name='message' id='message' placeholder='write your message'></textarea>
                            <button className='btn contact pointer' type='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;