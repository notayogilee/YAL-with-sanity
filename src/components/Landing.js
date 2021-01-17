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
  Hidden,
  Grid
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#94b5b1',
      main: '#668582',
      dark: '#3b5856',
      contrastText: '#fff'
    }
  },
  typography: {
    h3: {
      fontSize: '2.4rem',
      '@media (max-width:600px)': {
        fontSize: '1rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '95vh',
    width: '100%',
    paddingBottom: '4rem',
    top: 0,
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  titlecard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    height: '60vh',
    fontFamily: 'Monserrat',
    // marginBottom: '2rem'
  },
  linkcard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    width: '100%'
  },
  link: {
    display: 'flex',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#94b5b1',
    padding: '1rem'
  },
  title: {
    fontFamily: 'Montserrat',
    color: '#3b5856'
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
          <Grid container className={classes.linkcard}
          >
            <Grid item xs={12} lg={8}>
              <Link
                to="/video"
              >
                <Paper
                  className={classes.link}
                  elevation={5}
                  color="primary"
                  style={{
                    marginBottom: '12px',
                  }}
                >

                  <Typography
                    variant="h3"
                    color='#3b5856'
                    className={classes.title}
                  >
                    VIDEOS
              </Typography>

                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Link
                to="/blog"
              >
                <Paper
                  className={classes.link}
                  elevation={5}
                  style={{ marginBottom: '12px' }}
                >
                  <Typography
                    variant="h3"
                    className={classes.title}
                  >
                    BLOG
                </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Link
                to="/recipe"
              >
                <Paper
                  className={classes.link}
                  elevation={5}
                >
                  <Typography
                    variant="h3"
                    className={classes.title}
                  >
                    RECIPES
                </Typography>
                </Paper>
              </Link>
            </Grid>
          </Grid>

          <Hidden smDown>
            <Zoom in={active} timeout={700}>
              <Grid container className={classes.linkcard}>
                <Grid item lg={12}>
                  <Paper
                    className={classes.titlecard}
                    elevation={5}
                  >
                    <>
                      <Typography
                        variant="h1"
                        className={classes.title}
                      >
                        YOGI
              </Typography>
                      <Typography
                        variant="h1"
                        className={classes.title}
                      >
                        A
              </Typography>
                      <Typography
                        variant="h1"
                        className={classes.title}
                      >
                        LUNETTE
              </Typography>
                    </>
                  </Paper>
                </Grid>
              </Grid>
            </Zoom>
          </Hidden>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Landing
