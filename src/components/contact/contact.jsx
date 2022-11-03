import  { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import './contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
  
  const form =useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
emailjs.sendForm('service_9kxzmjo','template_vtp85so', form.current, '0ftlD6F5YNeUb3apH')
e.target.reset()
	
}; 

  return (
    <div id='section1'>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className="contact_options">
            <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>navinmoorthyyash@gmail.com</h5>
              <a href='mailto:navinmoorthyyash@gmail.com'>Send a message</a>
            </article>
            <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Navin Fox</h5>
              <a href='https://www.facebook.com/login/'>Send a message</a>
            </article>
            <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
              <h4>Whats app</h4>
              <h5>8892106025</h5>
              <a href='https://web.whatsapp.com/'>Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" id=""  placeholder='Your Full Name' required/>
            <input type="email" name="email" id=""  placeholder='Your Email' required/>
            <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
