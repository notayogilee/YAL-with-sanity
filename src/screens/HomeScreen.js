import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';

const HomeScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)



  console.log(scrollPosition)
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
