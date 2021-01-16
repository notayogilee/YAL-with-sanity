import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Zoom,
  Fade,
  Hidden,
  Grid
} from '@material-ui/core';
import video from '../images/Landing.mp4';
import blog from '../images/bootcamp.jpg';
import recipe from '../images/dip.jpg';

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
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '95vh',
    width: '100%',
    position: 'relative',
    marginBottom: '70px',
    top: 0,
    '& > *': {
      margin: theme.spacing(1),
    }
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
    width: '48%',
    height: '90%',
    left: '50%',
    fontFamily: 'Monserrat'
  },
  linkcard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
  },
  link: {
    display: 'flex',
    height: '29%',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#94b5b1'
  },
  // video: {
  //   objectFit: 'cover',
  //   height: '100%',
  //   width: '100%',
  // },
  title: {
    fontFamily: 'Montserrat',
    color: '#3b5856'
  }
}))

const Landing = () => {
  const classes = useStyles();
  const active = true

  // const [displayLink, setDisplayLink] = useState('title');
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          className={classes.root}
          maxWidth="lg"
          name="landing"
        >
          <Container style={{ width: '50%', left: 0 }}
            className={classes.linkcard}
          >
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
                {/* <video className={classes.video} autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video> */}
                <Typography
                  variant="h3"
                  color='#3b5856'
                  className={classes.title}
                >
                  VIDEOS
              </Typography>

              </Paper>
            </Link>
            <Link
              to="/blog"
            >
              <Paper
                className={classes.link}
                elevation={5}
                style={{ marginBottom: '12px' }}
              // style={{
              //   backgroundImage: `url(${blog})`,
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center',
              //   marginBottom: '12px',
              //   backgroundColor: "rgba(0,0,0,0.5)",
              // }}
              >
                <Typography
                  variant="h3"
                  className={classes.title}
                >
                  BLOG
                </Typography>
              </Paper>
            </Link>
            <Link
              to="/recipe"
            >
              <Paper
                className={classes.link}
                elevation={5}
              // style={{
              //   backgroundImage: `url(${recipe})`,
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center'
              // }}
              >
                <Typography
                  variant="h3"
                  className={classes.title}
                >
                  RECIPES
                </Typography>
              </Paper>
            </Link>
          </Container>

          <Hidden mdDown>
            <Zoom in={active} timeout={700}>
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
            </Zoom>
          </Hidden>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Landing
