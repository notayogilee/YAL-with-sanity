import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import VideoModal from '../components/VideoModal';
import {
  Container,
  Card,
  Grid,
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
        <Header title={"Videos"} />

      </Fade>
      <Container className={classes.root} disableGutters>
        {loading ? (
          <Spinner />
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
                          <VideoModal title={video.snippet.title} description={video.snippet.description} />
                          {/* <Link to={`/video/${video.id.videoId}`}>
                            <Typography style={{ textAlign: 'center' }}>More Info</Typography>
                          </Link> */}
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
