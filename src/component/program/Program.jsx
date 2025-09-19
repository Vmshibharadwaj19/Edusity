import React from 'react'
import './Program.css';
import program_1 from '../../assets/img/program-1.png';
import program_2 from '../../assets/img/program-2.png';
import program_3 from '../../assets/img/program-3.png';
import program_icon_1 from '../../assets/img/program-icon-1.png';
import program_icon_2 from '../../assets/img/program-icon-2.png';
import program_icon_3 from '../../assets/img/program-icon-3.png';

const Program = () => {
  return (
    <div className='programs '>
      <div className="program">
        <img src= {program_1} alt=" A student Photo" />
        <div className="caption">
          <img src={program_icon_1} alt=" program Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src= {program_2} alt=" A student Photo" />
        <div className="caption">
          <img src={program_icon_2} alt=" program Icon" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img src= {program_3} alt=" A student Photo" />
        <div className="caption">
          <img src={program_icon_3} alt=" program Icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Program
