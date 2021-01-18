import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Zoom,
  Box,
  Fade,
  Grow,
  Hidden,
  Grid
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#f4f4f4' },

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
    height: '95vh',
    width: '100%',
    paddingTop: '1rem',
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
    <>
      <ThemeProvider theme={theme}>
        <Container
          className={classes.root}
          maxWidth="lg"
          name="landing"
        >

          <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <Container>
              <Fade in={active} timeout={2500}>
                <Typography variant="h1" className="text" style={{ color: '#f4f4f4' }}>
                  YOGI A LUNETTE
                </Typography>
              </Fade>
            </Container>

            <Hidden smDown>
              <Container>
                <Paper
                  style={{
                    height: '40vh',
                    background: '#333'
                  }}>

                </Paper>
              </Container>
            </Hidden>
          </Container>


          <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
            <Hidden xsDown>
              <Container>
                <Paper
                  style={{
                    minHeight: '40vh',
                    background: '#666'
                  }}>

                </Paper>
              </Container>
            </Hidden>

            <Container
              style={{
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
              }} >

              <Link to="/video">
                <Zoom in={active} timeout={500}>
                  <Paper elevation={5} className={classes.links}>
                    <Typography variant="h3">
                      VIDEOS
                  </Typography>
                  </Paper>
                </Zoom>
              </Link>
              <Link to="/blog">
                <Zoom in={active} timeout={800}>
                  <Paper elevation={5} className={classes.links}>
                    <Typography variant="h3">
                      BLOG
                    </Typography>
                  </Paper>
                </Zoom>
              </Link>
              <Link to="/recipe">
                <Zoom in={active} timeout={500}>
                  <Paper elevation={5} className={classes.links}>
                    <Typography variant="h3">
                      RECIPES
                    </Typography>
                  </Paper>
                </Zoom>
              </Link>

            </Container>

          </Container>

        </Container>
      </ThemeProvider>
    </>
  )
}

export default Landing
