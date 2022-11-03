import React from 'react';
import pdf from '../../assets/Naveen.pdf';

const cta = () => {
  return (
    <div className='cta'>
    <a href={pdf} className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
  </div>
  )
}

export default cta
