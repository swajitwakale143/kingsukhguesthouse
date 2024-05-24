import React from 'react';
import './Rooms.css'; 
import small from './Images/small.jpg';
import large from './Images/large.jpg';

function Rooms() {
  return (
    <section className="rooms">
      <div className="room-section">
        <div className="room-container">
          <div className="room-content">
            <h2>OUR LIVING ROOM</h2>
            <h3>The Most Memorable Rest Time Starts Here.</h3>
          </div>
        </div>
      </div>

      <div className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src={small} alt="Cozy Haven Room" />
          </div>
          <div className="room-content">
            <h2>Cozy Haven Room</h2>
            <h3>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</h3>
            <p>Starting from Rs. 1000/night</p>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>
      </div>

      <div className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src={large} alt="Spacious Serenity Suite" />
          </div>
          <div className="room-content">
            <h2>Spacious Serenity Suite</h2>
            <h3>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</h3>
            <p>Starting from Rs. 1500/night</p>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
