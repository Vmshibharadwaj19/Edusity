import React from 'react';
import about_img from '../../assets/img/about.png';
import play_icon from '../../assets/img/play-icon.png';
import './About.css';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="Student Image"  className='about_img'/>
        <img src={play_icon} alt=" Play Icon"  className='play_icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Lorem ipsum dolor sit ame</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet metus nec tortor placerat cursus. 
          Duis aliquet tempor tincidunt. Praesent enim nisi.Ut scelerisque purus risus, ac feugiat ex posuere ac. Vestibulum orci massa, vestibulum non sem quis, convallis condimentum lectus. Orci varius natoque  </p>

        <p>Maecenas vel nibh hendrerit, tempus tellus vel, rutrum urna. Ut tempus quis sem mattis condimentum.</p>
        
        <p>Aenean feugiat metus mauris, ut aliquam diam auctor ac. Etiam id imperdiet massa, sit amet porttitor lectus. Quisque posuere.penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce consectetur non velit quis pellentesque. Sed sapien velit, venenatis non eros eget, cursus varius diam.</p>
      </div>
    </div>
  )
}

export default About
