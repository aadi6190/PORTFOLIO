import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const [done, setdone ] =useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_whibdih', 'template_xqwr43u', form.current, 'B35lD9-agwPBZs6XC')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    





    return (
    <div className="contact-form">
        <div className="w-left">
            <div className="span">
                <span></span>

                <span>Contact Me</span>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Massage' />
                <input type="submit" name='send' className='button' />
              <span>{done&& "Thanks For Contacting Me"}</span>

            </form>
        </div>

    </div>
    )
}

export default Contact;
