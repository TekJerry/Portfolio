import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div id="contacto" className='form'>
      <h1>Contact Me</h1>
      <form action="https://formsubmit.co/jerrycodingtek@gmail.com" method='POST'>
        <input type="hidden" name="_subject" value="New Email!" required/>
        <input type="email" name="email" placeholder='Email Address' required/>
        <input type="text" name="name" placeholder='Write your message here' required/>
        <button className='enter' type="submit">Send</button>
      </form>
    </div>
  )
}
