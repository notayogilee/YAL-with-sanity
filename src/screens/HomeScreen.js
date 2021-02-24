import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/Theme';

const HomeScreen = () => {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Landing />
      <About />
      <Contact />
    </ThemeProvider>
  )
}

export default HomeScreen
