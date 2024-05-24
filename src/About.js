import React from 'react';
import './About.css'; 
import out from './Images/out.jpg'; 

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={out} alt="Kingsukh Guest House" />
        </div>
        <div className="about-content">
          <h2>ABOUT US</h2>
          <h3>The Best Holidays Start Here!</h3>
          <p>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <p><strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><strong>Contact us:</strong> +91 9007062180</p>
          <button className="book-now">BOOK NOW</button>
        </div>
      </div>
    </section>
  );
}

export default About;
