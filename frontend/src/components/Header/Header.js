import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Left Section: Logo and Description */}
        <div className="header-left">
          <h1 className="header-logo">Converter App</h1>
          <p className="header-subtext">Effortlessly transform your documents with precision and ease!</p>
        </div>

        {/* Right Section: Call-to-Action Button */}
        <div className="header-right">
          <button className="cta-btn" onClick={() => window.open("https://github.com/swezalmanhas", "_blank")}>Github</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
