import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiFire } from "react-icons/gi";

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideAt650, setHideAt650] = useState(false);

  useEffect(() =>  {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setHideAt650(true);
      } else {
        setHideAt650(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Call handleResize initially to set the initial state based on the window width
    handleResize();
    
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflowY = isMenuOpen ? 'auto' : 'hidden';
  }
  
   return (
    <nav className="navigation">
      <div className={`${hideAt650 ? 'hide' : 'header__main'}`}>
        <div className="header__portfolio-icon">
            <a href="/">
                <GiFire size="2.5rem" /> <p>VP</p>
            </a>
        </div>
        <div className={`${hideAt650 ? 'hide' : 'header__ul-links'}`}> 
          <div className="header__nav-links">
            <ul>
              <li><a href="#projects"><p>Projects</p></a></li>
              <li><a href="#technologies"><p>Technologies</p></a></li>
              <li><a href="#about"><p>About</p></a></li> 
            </ul>
          </div>
          <div className="header__nav-socials">
            <div className="socials__github"><a href="https://github.com/Tomoroso"><AiFillGithub size="3rem" /></a></div>
            <div className="socials__linkedin"><a href="https://www.linkedin.com/in/vladislav-pinteac-067879166/"><AiFillLinkedin size="3rem" /></a></div>
            <div className="socials__instagram"><a href="https://www.instagram.com/itsm.evlad"><AiFillInstagram size="3rem" /></a></div>
          </div>
        </div>
      </div>

      <div className={`${hideAt650 ? 'show burger__icon' : 'hide'}`} onClick={toggleMenu}>
        <div className={`${isMenuOpen ? 'hide' : 'header__portfolio-icon'}`}>
          <div className="flex">
            <a className="icon__link" href="/">
                <GiFire size="2.5rem" /> <p>VP</p>
            </a>
          </div>
          <div>
              <FaBars style={{ cursor: 'pointer', width: '20px', height: '20px'}}/>
          </div>
        </div>
      </div>
        <div className={`${isMenuOpen ? 'show burger-menu' : 'hide'}`}>
          <div className="cross__icon" onClick={toggleMenu}>
            <ImCross style={{width: '20px', height: '20px'}}/>
          </div>
          
          <div className="header__nav-links">
            <ul className="flex" onClick={toggleMenu}>
              <li><a href="#projects"><p>Projects</p></a></li>
              <li><a href="#technologies"><p>Technologies</p></a></li>
              <li><a href="#about"><p>About</p></a></li> 
            </ul>
          </div>
          <div className="header__nav-socials" onClick={toggleMenu}>
            <div className="socials__github"><a href="https://github.com"><AiFillGithub size="3rem" /></a></div>
            <div className="socials__linkedin"><a href="https://github.com"><AiFillLinkedin size="3rem" /></a></div>
            <div className="socials__instagram"><a href="https://github.com"><AiFillInstagram size="3rem" /></a></div>
          </div>
        </div>

     

    </nav>
    );
}

export default Header;