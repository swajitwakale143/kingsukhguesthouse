import React from 'react';
import './Home.css'; // We'll create this CSS file next

function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <div className="content">
          <h2>Simple - Unique - Friendly</h2>
          <h1>Make Yourself At Home In Our Guest House</h1>
          <button className="book-now">BOOK NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
