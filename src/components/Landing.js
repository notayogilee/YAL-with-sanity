import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Box,
  Slide,
  Hidden
} from '@material-ui/core';
import video from '../images/video.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 'auto',
    minHeight: '92.5vh',
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
    minHeight: '10%',
    marginBottom: '10px',
    background: 'transparent',
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

        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50%' }} >
          <Container>
            <Slide in={active} timeout={1500}>
              <Typography variant="h1" className="text" style={{ color: '#f4f4f4' }}>
                YOGI A LUNETTE
                </Typography>
            </Slide>
          </Container>

          {/* <Hidden smDown>
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
            </Hidden> */}
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
              <Box boxShadow={5} className={classes.links}>
                <Typography variant="h3" color="primary">
                  VIDEOS
                  </Typography>
              </Box>
            </Link>
            <Link to="/blog">
              <Box boxShadow={5} className={classes.links}>
                <Typography variant="h3" color="primary">
                  BLOG
                    </Typography>
              </Box>
            </Link>
            <Link to="/recipe">
              <Box boxShadow={5} className={classes.links}>
                <Typography variant="h3" color="primary">
                  RECIPES
                    </Typography>
              </Box>
            </Link>

          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default Landing
