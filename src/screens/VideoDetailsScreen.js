import React, { useContext } from 'react';
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
  const classes = useStyles(theme);

  const { loading, singleVideoDetails } = videoContext;

  // get id from params
  const { id } = useParams();

  // Find selected video from state
  const videoMatch = singleVideoDetails.filter((video) => id === video.id)

  // Returns array with one match
  const video = videoMatch[0];

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
  );
};

export default VideoDetailsScreen;
