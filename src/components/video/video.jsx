import React from 'react';
import './video.css';
import Video from '../../assets/video.mp4'

const video = () => {
  return (
    <div>
    <video className='videoTag'  autoPlay loop muted >
    <source src={Video} type='video/mp4' />
    Your browser does not support the video tag.
    </video> 
    </div>
  )
}

export default video;
