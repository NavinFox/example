import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {MdLibraryBooks} from 'react-icons/md';
import {RiServiceLine} from 'react-icons/ri';
import {MdOutlineMessage} from 'react-icons/md';
import { useState } from 'react';



const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdLibraryBooks/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdOutlineMessage/></a>
    </nav>
  )
}

export default Navbar;