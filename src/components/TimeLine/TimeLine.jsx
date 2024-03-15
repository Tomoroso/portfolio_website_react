import React from 'react';
import { TimeLineData } from '../../constants/constants';

import './TimeLine.css'

const TimeLine = () => {
  return (
    <div className="timeline__main-container">
    <span className="decoration__span-above"></span>
      <h1>Timeline</h1>
      <p>I embarked on my journey in 2014 during my university years.
         After completing my studies with limited experience, I encountered the challenge
         of the "minimum 3+ years of..." requirement.
         </p>
      <div className="timeline__content">
        {TimeLineData.map(({year, text}, index) => (
          <div  key={index}>
            <h3>{year}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>   
    </div>
  )
}

export default TimeLine;