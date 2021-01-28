import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import {
  Container,
  Paper,
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
  const videos = videoContext.videos;

  const classes = useStyles(theme);

  // get id from params
  const { id } = useParams();

  // get single video details from state
  const singleVideoDetails = (id) => {
    return videos.items.filter((video) => video.id.videoId === id)[0];
  }

  const video = singleVideoDetails(id)

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h1">
          {video.snippet.title}
        </Typography>

        <Paper style={{ height: 'auto', width: '80vw' }}>
          <Typography >
            {video.snippet.description}
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default VideoDetailsScreen
