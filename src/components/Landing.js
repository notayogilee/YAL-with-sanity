import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Zoom,
  Box,
  Slide,
  Hidden
} from '@material-ui/core';
import video from '../images/video.mp4';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8AACA8' },

  },
  typography: {
    h3: {
      fontSize: '2.4rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem'
      },
    },
    h1: {
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '4rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '92.5vh',
    width: '100%',
    paddingBottom: '2rem',
    textAlign: 'center',
    overflow: 'hidden'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    marginBottom: '10px',
    background: 'transparent',
  }
}))

const Landing = () => {
  const classes = useStyles();
  const active = true

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          className={classes.root}
          maxWidth="lg"
          name="landing"
        >

          <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50%' }} >
            <Container>
              <Slide in={active} timeout={1500}>
                <Typography variant="h1" className="text" style={{ color: '#f4f4f4' }}>
                  YOGI A LUNETTE
                </Typography>
              </Slide>
            </Container>

            <Hidden smDown>
              <Slide in={active} direction="left" timeout={500}>
                <Container>
                  <Paper
                    style={{
                      height: '40vh',
                      background: '#8AACA8',

                    }}>
                    <Typography variant="h1" style={{ color: "#f4f4f4" }} >
                      YOUR LOGO HERE
                  </Typography>
                  </Paper>
                </Container>
              </Slide>
            </Hidden>
          </Container>

          <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '50%' }}>
            <Hidden xsDown>
              <Slide in={active} direction="right" timeout={500}>
                <Container>
                  <Box
                    style={{
                      height: '40vh',
                      width: '100%'
                    }}>
                    <video style={{ objectFit: 'cover', height: '40vh', width: '100%' }} autoPlay muted loop>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Box>
                </Container>
              </Slide>
            </Hidden>


            <Container
              style={{
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }} >

              <Link to="/video">
                <Zoom in={active} timeout={500}>
                  <Box boxShadow={5} className={classes.links}>
                    <Typography variant="h3" color="primary">
                      VIDEOS
                  </Typography>
                  </Box>
                </Zoom>
              </Link>
              <Link to="/blog">
                <Zoom in={active} timeout={800}>
                  <Box boxShadow={5} className={classes.links}>
                    <Typography variant="h3" color="primary">
                      BLOG
                    </Typography>
                  </Box>
                </Zoom>
              </Link>
              <Link to="/recipe">
                <Zoom in={active} timeout={1000}>
                  <Box boxShadow={5} className={classes.links}>
                    <Typography variant="h3" color="primary">
                      RECIPES
                    </Typography>
                  </Box>
                </Zoom>
              </Link>

            </Container>

          </Container>

        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Landing
