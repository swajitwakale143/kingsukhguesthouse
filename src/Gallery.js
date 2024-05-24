import React from 'react';
import './Gallery.css'; 
import one from './Images/one.jpg';
import ayodhya from './Images/ayodhya.webp';
import baranti from './Images/baranti.webp';
import flower from './Images/flower.jpg';
import mithonDam from './Images/mithonDam.webp';
import palash from './Images/palash.webp';
import service from './Images/service.jpg';
import recep from './Images/recep.jpg';
import room1 from './Images/room1.jpg';


function Gallery() {
  return (
    <section className="gallery">
      <h2>GALLERY</h2>
      <div className="images-container">
        <div className="image-item">
          <img src={one} alt="Image 1" />
        </div>
        <div className="image-item">
          <img src={ayodhya} alt="Image 2" />
        </div>
        <div className="image-item">
          <img src={baranti} alt="Image 3" />
        </div>
        <div className="image-item">
          <img src={flower} alt="Image 4" />
        </div>
        <div className="image-item">
          <img src={mithonDam} alt="Image 5" />
        </div>
        <div className="image-item">
          <img src={palash} alt="Image 6" />
        </div>
        <div className="image-item">
          <img src={service} alt="Image 7" />
        </div>
        <div className="image-item">
          <img src={recep} alt="Image 7" />
        </div>
        <div className="image-item">
          <img src={room1} alt="Image 7" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
