import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import {
  Container,
  Paper,
  Typography,
  Fade
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
    }
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
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    padding: '2rem'
  }
}))

const VideoDetailsScreen = () => {
  const videoContext = useContext(VideoContext);
  // const [video, setVideo] = useState({});

  const { loading, singleVideoDetails } = videoContext;

  console.log(singleVideoDetails)
  const classes = useStyles(theme);

  // get id from params
  const { id } = useParams();

  const videoMatch = singleVideoDetails.filter((video) => id === video.id)

  const video = videoMatch[0];

  // const fetchDetails = async (id, singleVideoDetails) => {
  //   // const getVideoDetailsFromState = await videoContext.singleVideoDetails;
  //   if (singleVideoDetails.length > 0) {
  //     const videoMatch = await singleVideoDetails.filter((video) => id === video.id);
  //     if (videoMatch.length > 0) {
  //       setVideo(videoMatch[0]);
  //       return;
  //     }
  //   }
  //   const requestVideoDetails = await videoContext.getSingleVideoDetails(id);
  //   setVideo(requestVideoDetails);
  // };

  // fetchDetails(id, singleVideoDetails)

  // const requestVideoDetails = async (id) => {
  //   await getSingleVideoDetails(id);
  //   const videoMatch = singleVideoDetails.filter((video) => id === video.id);
  //   setVideo(videoMatch);
  // }

  // check state for video details
  // if (singleVideoDetails.length > 0) {
  //   const videoMatch = singleVideoDetails.filter((video) => id === video.id);
  //   if (videoMatch.length > 0) {
  //     console.log(videoMatch)
  //     setVideo(videoMatch[0]);

  // console.log(video.snippet)

  // useEffect(() => {
  //   if (!video.snippet) {
  //     getSingleVideoDetails(id)
  //   }
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.root}>
        {loading &&
          <Spinner />
        }
        {video.snippet &&
          <>
            <Fade in={video} timeout={300}>
              <Header title={video.snippet.title} />
            </Fade>

            <Paper style={{ height: 'auto', width: '80vw' }}>
              <Typography >
                {video.snippet.description}
              </Typography>
            </Paper>
          </>
        }


      </Container>
    </ThemeProvider>
  )
}

export default VideoDetailsScreen
