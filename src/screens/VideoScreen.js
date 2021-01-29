import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import {
  Container,
  Card,
  Grid,
  CircularProgress,
  Slide,
  Fade,
  Typography
} from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aaca8',
      light: '#baded9',
      dark: '#5c7d79'
    },
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
    position: 'relative',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    margin: 'auto',
    padding: 0
  },
  header: {
    height: '20vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(0.25turn,#5c7d79, #8aaca8, #baded9)',
    color: "#f4f4f4",
    overflowX: 'hidden',
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  media: {
    height: '253.125px',
    width: '450px',
    margin: 'auto',
    '@media (max-width: 600px)': {
      height: '168.75px',
      width: '300px',
    }
  }
}))

const VideoScreen = () => {
  const videoContext = useContext(VideoContext);
  const classes = useStyles();

  // add if-statement to reduce API calls on page navigation
  useEffect(() => {
    if (!videos.items) {
      console.log('Request was made')
      // if videoContext is empty object, fetch videos from youtube api
      videoContext.loadVideos();
    }
    // eslint-disable-next-line
  }, [])

  // get state from context
  const { videos, loading } = videoContext;

  if (videos.items) {
    console.log(videos)
  }

  return (
    <ThemeProvider theme={theme}>
      <Fade in={videos} timeout={300}>
        <header className={classes.header}>
          <Typography
            variant="h1"
          >
            Videos
          </Typography>
        </header>

      </Fade>
      <Container className={classes.root} disableGutters>
        {loading ? (
          <div className={classes.spinner}>
            <CircularProgress
              color="primary"
              size={140}
              thickness={4.0}
            />
          </div>
        ) : (
            <>


              <Container style={{ transform: 'translateY(10%)' }}>
                <Grid container spacing={10}>
                  {videos.items && videos.items.map((video, index) => {
                    // api returns playlists as well. I just want videos with videoId
                    return (video.id.videoId &&
                      <Fade in={videos} direction="up" key={video.etag} timeout={(index * 200) + 500}>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={5}
                          lg={5}
                          style={{ padding: '1rem 0', margin: 'auto' }}
                        >
                          <Card className={classes.media} >

                            <ReactPlayer
                              config={{
                                youtube: {
                                  playerVars: {
                                    modestbranding: 1,
                                    autoplay: 1
                                  }
                                }
                              }}
                              controls
                              light
                              height="100%"
                              width="100%"
                              url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            />
                          </Card>
                          <Link to={`/video/${video.id.videoId}`}>
                            <Typography style={{ textAlign: 'center' }}>More Info</Typography>
                          </Link>
                        </Grid>
                      </Fade>
                    )
                  })
                  }
                </Grid>
              </Container>
            </>
          )
        }
      </Container>
    </ThemeProvider>
  );
};

export default VideoScreen;
