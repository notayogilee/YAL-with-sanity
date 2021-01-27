import React, { useContext, useEffect } from 'react';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import {
  Container,
  Box,
  Card,
  Typography
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexBasis: '33.3333333%'
  }
}))

const VideoScreen = () => {
  const videoContext = useContext(VideoContext);

  useEffect(() => {
    videoContext.loadVideos();
  }, [])

  const videos = videoContext.videos
  const classes = useStyles();

  console.log(videos)

  return (
    <Container
      maxWidth='lg'
      className={classes.root}
    >
      <h1>Videos</h1>
      <ul>
        {videos.items && videos.items.map(video => (
          <li key={video.id.videoId}
          >
            <Box>
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              />
            </Box>

          </li>
        ))}
      </ul>

    </Container>
  )
}

export default VideoScreen
