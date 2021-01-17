import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Container,
  Card,
  Paper,
  CardMedia,
  Typography
} from '@material-ui/core';
// import video from '../images/Landing.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '95vh',
    width: '100%',
    backgroundColor: '#ff7961',
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Container
        className={classes.root}
        maxWidth="lg"
        name="about"
      >
        <h1>Bout</h1>
      </Container>
    </div>
  )
}

export default About
