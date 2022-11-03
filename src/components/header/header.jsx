import React from 'react';
import './header.css';
import Cta from './cta';
// import ME from '../../assets/me.png';
import Headersocial from './headersocial';
import PROFILE from '../../assets/Navin.jpg';

const header = () => {
  return (
    <header>
      <div className="container header__container" id="main">
      <h5>Hello I'm</h5>
      <h1>Navin Fox</h1>
      <h5 className="text-light">Front End Developer</h5>
      <Cta/>
      <Headersocial/>
      <div className='me'>
          <img src={PROFILE} alt="me"  className='profile'/>
      </div>
      <a href='#contact' className='scroll__down'>SCROLL DOWN</a>
      </div> 
     
    </header>
    
  )
}

export default header
