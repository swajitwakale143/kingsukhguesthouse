import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>Beside Barshal Water Tank,<br />
           Manpur, Barhanti,<br />
           West Bengal 723156</p>
        <p>kkghosh0099@gmail.com</p>
        <p>+91 9007062180</p>
      </div>
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write your message here...</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
      
      {/* Map Section */}
      <div className="map-section">
        <h2>Kingsukh Guest House</h2>
        <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.0922345,87.9094323,17z/data=!3m1!4b1!4m8!3m7!1s0x39f78b10f4eb3fdb:0x299939c57d3482f8!5m2!4m1!1i2!8m2!3d23.0922345!4d87.911621" target="_blank" rel="noopener noreferrer">Directions</a>
        <p>4.8 ★ 8 reviews</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3451045418836!2d87.90943231444225!3d23.09223448489737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f78b10f4eb3fdb%3A0x299939c57d3482f8!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1624637754196!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Kingsukh Guest House Location"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
