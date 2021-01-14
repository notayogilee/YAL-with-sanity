import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Container,
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';
import video from '../images/Landing.mp4'
import Navbar from '../components/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#f4f4f4'
  },
  about: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#ff7961',
  },
  contact: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#757de8',
  }
}))

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div>

      <Navbar style={{ position: 'sticky' }} />

      <Container
        className={classes.root}
        maxWidth="lg"
        name="landing"
      >
        <Typography>
          HomeScreen
      </Typography>
        <Card>
          <CardMedia
            src={video}
          />
        </Card>
      </Container>
      <Container
        className={classes.about}
        maxWidth="lg"
        name="about"
      >
        <Typography>
          About
        </Typography>
      </Container>
      <Container
        className={classes.contact}
        maxWidth="lg"
        name="contact"
      >
        <Typography>
          Contact
        </Typography>
      </Container>
    </div>
  )
}

export default HomeScreen
