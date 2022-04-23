
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef(); 

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_kqth7uy",
         "template_0quzoo3",
         form.current,
         "AvWBpG6_THWhedjoI"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );

       e.target.reset(); 
   };


  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>farhandx1@hotmail.com</h5>
            <a href="mailto:farhandx1@hotmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+85269907484</h5>
          </article>
        </div>
        <form ref = {form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact