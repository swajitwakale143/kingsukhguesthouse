import React from 'react';
import './Services.css'; 
import palash from './Images/palash.webp';

function Services() {
  return (
    <div>
      <section className="services">
        <div className="service-container">
          <div className="service-image">
            <img src={palash} alt="Services" />
          </div>
          <div className="service-content">
            <h2>SERVICES</h2>
            <h3>Strive Only For The Best.</h3>
            <ul>
              <li>High Class Security</li>
              <li>24 Hours Room Service</li>
              <li>Restaurant</li>
              <li>Tourist Guide Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stats-item">
            <span>100+</span>
            Bookings Completed
          </div>
          <div className="stats-item">
            <span>150+</span>
            Happy Customers
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;