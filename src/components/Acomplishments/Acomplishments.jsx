import React from 'react'

import './Acomplishments.css'

const Acomplishments = () => {
  return (
    <div className="acomplishments__main-container">
      <div className="acomplishments__h1">
      <span className="decoration__span-above"></span>
      <h1>Personal Achievements</h1>
      </div>

      <div className="acomplishments__blocks">

        <div>
          <h2>4</h2>
          <p>Years of IT-degree university completed.</p>
        </div>

        <div>
          <h2>5000+</h2>
          <p>Hours of studying web development courses and mastering English.</p>
        </div>

        <div>
          <h2>4</h2>
          <p>Fluent languages, with Nederlands next on my list.</p>
        </div>

        <div>
          <h2>2024</h2>
          <p>Acquired my Dutch driver's licence.</p>
        </div>

      </div>

    </div>
  )
}

export default Acomplishments