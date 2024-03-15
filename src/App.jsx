import React from 'react';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import TimeLine from './components/TimeLine/TimeLine'
import Acomplishments from './components/Acomplishments/Acomplishments'
import Footer from './components/Footer/Footer'

import './App.css';

const App = () => {

  return (
  <div className="app__main">
    <Header />
    <div className="portfolio__content-divs">
      <div className="app__hero-animation flex">
        <Hero />
        <BackgroundAnimation />
      </div>
      <Projects />
      <Technologies />
      <TimeLine />
      <Acomplishments />
      <Footer />
    </div>
  </div>

  )



};

export default App;