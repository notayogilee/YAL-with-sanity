import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import moment from 'moment';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Fade,
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
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
        fontSize: '1rem'
      },
    },
    h1: {
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '4rem'
      }
    },
    h2: {
      fontSize: '2.4rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem'
      },
    },
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '80vh',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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

  console.log(video.snippet.tags)

  return (
    <ThemeProvider theme={theme}>
      <Fade in={video} timeout={300}>
        <Header variant={'h2'} title={video.snippet.title} />
      </Fade>
      <Container maxWidth="lg" className={classes.root}>
        {loading &&
          <Spinner />
        }
        {video.snippet &&
          <>
            <Card elevation={5} style={{ height: 'auto', width: '80vw' }}>
              {video.snippet.tags &&
                <CardHeader
                  title={`#${video.snippet.tags.join(',').replaceAll(',', ' #')}`}
                  style={{ color: '#5c7d79', textAlign: 'center' }}
                />
              }
              <CardMedia
                style={{ paddingTop: '56.25%', margin: '2rem', borderRadius: '15px', }}
                // not all videos have standard resolution
                image={
                  video.snippet.thumbnails.standard
                    ? video.snippet.thumbnails.standard.url
                    : video.snippet.thumbnails.high.url}
              >
              </CardMedia>
              <Typography variant="h6" style={{ padding: '1rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                {video.snippet.localized.description}
              </Typography>
            </Card>
            <Typography style={{ marginTop: '1rem' }}>
              Published on: <span>{moment(video.snippet.publishedAt).format("DD-MM-YYYY")}</span>
            </Typography>
          </>
        }
      </Container>
    </ThemeProvider>
  );
};

export default VideoDetailsScreen;
