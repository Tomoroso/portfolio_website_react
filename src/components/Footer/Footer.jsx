import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer__main-container" id="about">
      <div className="footer__break-line"></div>

      <div className="footer__info">
        <div className="footer__tel">
          <p>CALL</p>
            <a href="tel: +31684607911">+31684607911</a>
          </div>
        <div className="footer__email">
          <p>EMAIL</p>
          <a href="mailto:vpinteac@gmail.com">vpinteac@gmail.com</a>
        </div>
        
      </div>
      <div className="footer__p-and-socials">
        <div className="footer__p">
          <p>Studying is my way to success</p>
        </div>
        <div className="footer__socials">
            <div className="socials__github"><a href="https://github.com/Tomoroso"><AiFillGithub size="3rem" /></a></div>
            <div className="socials__linkedin"><a href="https://www.linkedin.com/in/vladislav-pinteac-067879166/"><AiFillLinkedin size="3rem" /></a></div>
            <div className="socials__instagram"><a href="https://www.instagram.com/itsm.evlad"><AiFillInstagram size="3rem" /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer