import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/img/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> We Ensure Better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla laoreet metus nec tortor placerat cursus.  </p>
          <button className='btn'> Explore More <img src={dark_arrow} alt="Dark Arrow Symbol" /></button>
      </div>
      
    </div>
  )
}

export default Hero
