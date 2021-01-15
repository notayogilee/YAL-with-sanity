import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Contact />
    </div>
  )
}

export default HomeScreen
