import React from 'react';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made by
      </span>
      <a href="https://swezalmanhasprotfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
         Swezal Manhas
      </a>
      <div className="footer-icons">
        <a href="https://github.com/swezalmanhas " target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/swezal-manhas-714095281/" target="_blank" rel="noopener noreferrer" className="footer-icon">
       
        <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
