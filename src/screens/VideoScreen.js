import React, { useContext, useEffect } from 'react';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import {
  Container,
  Card,
  Grid,
  Fade,
  Button,
  Typography
} from '@material-ui/core';
import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import theme from '../components/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    margin: 'auto',
    padding: '5rem 0'
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

const VideoScreen = ({ history }) => {
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
  const { videos, loading, loadMoreVideos, singleVideoDetails, getSingleVideoDetails } = videoContext;

  const handleClick = async (videoId) => {
    // Check if ANY video details are in session storage
    if (singleVideoDetails.length > 0) {
      // If videos exist, check for selected video
      const videoMatch = singleVideoDetails.filter((video) => videoId === video.id);
      if (videoMatch.length > 0) {
        // If found go to video details page
        history.push(`/video/${videoId}`)
      } else {
        // If not found in storage, make request to API
        await getSingleVideoDetails(videoId)
        history.push(`/video/${videoId}`)
      }
    } else {
      // If video details in session storage is empty, make request to API
      await getSingleVideoDetails(videoId)
      history.push(`/video/${videoId}`)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Fade in={videos} timeout={300}>
        <Header variant={'h1'} title={"Videos"} />
      </Fade>
      <Container className={classes.root} disableGutters>
        {loading ? (
          <Spinner />
        ) : (
            <>
              <Container>
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
                          style={{ padding: '4rem 0', margin: 'auto', display: 'flex', flexDirection: 'column' }}
                        >
                          <Card className={classes.media} >
                            <ReactPlayer
                              config={{
                                youtube: {
                                  playerVars: {
                                    modestbranding: 1,
                                    autoplay: 1,
                                    hl: 'fr-ca',
                                    playsinline: 0,
                                    rel: 0

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
                          <Button
                            onClick={() => handleClick(video.id.videoId)}
                            style={{ width: '100px', margin: 'auto' }}
                          >
                            More Info
                          </Button>
                        </Grid>
                      </Fade>
                    )
                  })
                  }
                </Grid>
              </Container>

              {videos.nextPageToken &&
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => loadMoreVideos(videos.nextPageToken)}
                    style={{ width: '300px' }}
                  >
                    <Typography>
                      Load more videos
                  </Typography>
                  </Button>
                </Container>
              }
            </>
          )
        }
      </Container>
    </ThemeProvider>
  );
};

export default VideoScreen;
