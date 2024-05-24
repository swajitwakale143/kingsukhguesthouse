import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Kingsukh Guest House</h1>
        <nav>
          <ul className="nav-links">
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
            <li><ScrollLink to="rooms" smooth={true} duration={500}>Rooms</ScrollLink></li>
            <li><ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            <li><button className="book-now">BOOK NOW</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
