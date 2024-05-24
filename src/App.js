import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Rooms from './Rooms';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="rooms"><Rooms /></section>
        <section id="services"><Services /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
