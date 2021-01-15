import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Card,
  Typography,
  Zoom,
  Fade,
  CardMedia
} from '@material-ui/core';
import video from '../images/Landing.mp4';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#94b5b1',
      main: '#668582',
      dark: '#3b5856',
      contrastText: '#fff'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    width: '48%',
    height: '100%',
    left: 0
  },
  link: {
    display: 'flex',
    height: '29%',
    justifyContent: 'center',
    alignItems: 'center'
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

  const [displayLink, setDisplayLink] = useState('title');
  const [title, setTitle] = useState(true);
  const [video, setVideo] = useState(false);
  const [blog, setBlog] = useState(false);
  const [recipe, setRecipe] = useState(false);

  return (
    <div>
      <Container
        className={classes.root}
        maxWidth="lg"
        name="landing"
      >
        <Container className={classes.linkcard}>
          <Link
            to="/video"
            onMouseOver={() => {
              setDisplayLink('video');
              setVideo(true);
            }}
            onMouseOut={() => setDisplayLink('title')}
          >
            <Paper
              className={classes.link}
              style={{ marginBottom: '12px' }}
              elevation={5}
            >
              <Typography
                variant="h3"
                style={{ fontFamily: 'Montserrat' }}
              >
                VIDEOS
          </Typography>
            </Paper>
          </Link>
          <Link
            to="/blog"
            onMouseOver={() => setDisplayLink('blog')}
            onMouseOut={() => setDisplayLink('title')}
          >
            <Paper
              className={classes.link}
              style={{ marginBottom: '12px' }}
              elevation={5}
            >
              <Typography
                variant="h3"
                style={{ fontFamily: 'Montserrat' }}
              >
                BLOG
          </Typography>
            </Paper>
          </Link>
          <Link
            to="/recipe"
            onMouseOver={() => setDisplayLink('recipe')}
            onMouseOut={() => setDisplayLink('title')}
          >
            <Paper
              className={classes.link}
              elevation={5}
            >
              <Typography
                variant="h3"
                style={{ fontFamily: 'Montserrat' }}
              >
                RECIPES
          </Typography>
            </Paper>
          </Link>
        </Container>
        <Container>
          <Zoom in={active} timeout={700}>
            <Paper
              className={classes.titlecard}
              elevation={10}
            >
              {displayLink === "title" &&
                <>
                  <Typography
                    variant="h1"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    YOGI
              </Typography>
                  <Typography
                    variant="h1"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    A
              </Typography>
                  <Typography
                    variant="h1"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    LUNETTE
              </Typography>
                </>
              }
              {displayLink === "video" &&

                <Card className={classes.video}>
                  <CardMedia>
                    <video autoPlay muted loop>
                      <source src={video} type="video/mp4" />
                    </video>
                  </CardMedia>
                </Card>

              }
              {displayLink === "blog" &&
                <>
                  <Typography
                    variant="h1"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    BLOG
              </Typography>
                </>
              }
              {displayLink === "recipe" &&
                <>
                  <Typography
                    variant="h1"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    RECIPE
              </Typography>
                </>
              }
            </Paper>
          </Zoom>
        </Container>
      </Container>
    </div>
  )
}

export default Landing
