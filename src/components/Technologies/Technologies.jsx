import React from 'react'
import { DiDatabase, DiJavascript, DiBootstrap} from 'react-icons/di';

import { experience } from '../../constants/constants';
import './Technologies.css'

const Technologies = () => {
  return (
    <div className="technologies__main">
    <span className="decoration__span-above"></span>
        <h1 id="technologies">Technologies</h1>
        <p className="technologies__description">I've worked with a range of technologies in the web development world. From Back-end to Design</p>
        <div className="technologies__elements">
          {/* <span><DiJavascript /></span> */}
          {experience.map(({ icon, field, technologies}, index) => (
            <div className="tech__field" key={index}>
              <span>{icon}</span>
              <h3>{field}</h3>
              <p>Experience with</p>
              <div className="tech__list">
                {technologies.map((item, index) => (
                <p className="tech__item" key={index}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Technologies