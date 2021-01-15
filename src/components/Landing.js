import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Container,
  Card,
  Paper,
  CardMedia,
  Typography,
  Zoom
} from '@material-ui/core';
import video from '../images/Landing.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '95vh',
    width: '100%',
    backgroundColor: '#f4f4f4',
    position: 'relative',
    top: 0
  },
  videocard: {
    position: 'absolute',
    width: '35%',
    height: '35%',
    top: '5%',
    left: '5%'
  },
  titlecard: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: '35%',
    top: '20%',
    left: '50%'
  },
  video: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',

  }
}))

const Landing = () => {
  const classes = useStyles();
  const active = true
  return (
    <div>
      <Container
        className={classes.root}
        maxWidth="lg"
        name="landing"
      >
        <Zoom in={active} timeout={700}>
          <Paper
            className={classes.videocard}
            elevation={10}
          >
            <video autoPlay muted loop className={classes.video}>
              <source src={video} type="video/mp4" />
            </video>
          </Paper>
        </Zoom>
        <Zoom in={active} timeout={700}>
          <Paper
            className={classes.titlecard}
            elevation={10}
          >
            <Typography>
              Yogi
         </Typography>
            <Typography>
              A
         </Typography>
            <Typography>
              Lunette
         </Typography>
          </Paper>
        </Zoom>

      </Container>
    </div>
  )
}

export default Landing
