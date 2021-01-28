import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import {
  Container,
  Card,
  Grid,
  CircularProgress,
  Slide,
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
    padding: '2rem'
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  media: {
    height: 'auto',
    width: 'auto',
    maxWidth: '560px',
    maxHeight: '315px',
    background: '#8aaca8'
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
    console.log(videos.items)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root} maxWidth="lg">
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
              <Slide in={videos} direction="left" timeout={500}>
                <Typography
                  variant="h1"
                  style={{
                    padding: '1rem',
                  }}>
                  Videos
              </Typography>
              </Slide>

              <Grid container spacing={6}>
                {videos.items && videos.items.map((video, index) => {
                  // api returns playlists as well. I just want videos with videoId
                  return (video.id.videoId &&
                    <Slide direction='up' in={video} timeout={(index * 200) + 500}>
                      <Grid
                        item
                        xs={10}
                        sm={7}
                        md={5}
                        lg={4}
                        key={video.etag}
                        style={{ margin: 'auto', maxWidth: '560px' }}
                      >
                        <Card className={classes.media}>

                          <ReactPlayer
                            controls
                            width="426px"
                            height="240px"
                            url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                          />
                        </Card>
                        <Link to={`/video/${video.id.videoId}`}>More Info</Link>
                      </Grid>
                    </Slide>
                  )
                })
                }
              </Grid>
            </>
          )
        }
      </Container>
    </ThemeProvider>
  );
};

export default VideoScreen;
