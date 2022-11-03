import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaDribbbleSquare} from 'react-icons/fa'
 

const headerSocial = () => {
  return (
    <div className='header__social'>
        <a href='https//linked.com' target="_blank"><BsLinkedin/></a>
        <a href='https//github.com' target="_blank"><BsGithub/></a>
        <a href='https//dribble.com' target="_blank"><FaDribbbleSquare/></a>
    </div>
  )
}

export default headerSocial