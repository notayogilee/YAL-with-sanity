import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Container,
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
        <Typography>
          About
      </Typography>
      </Container>
    </div>
  )
}

export default About
