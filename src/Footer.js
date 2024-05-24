import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Kingsukh Guest House</h2>
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <button className="book-now">BOOK NOW</button>
        </div>

        <div className="footer-section links">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h2>OUR SERVICES</h2>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>CONTACT US</h2>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>Email: kkghosh0099@gmail.com</p>
          <p>Phone: +91 9007062180</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
