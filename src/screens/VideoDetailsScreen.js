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
  ThemeProvider
} from '@material-ui/core/styles';
import theme from '../components/Theme';

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
