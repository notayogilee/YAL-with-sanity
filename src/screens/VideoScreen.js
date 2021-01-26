import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const classes = useStyles();

  const [videos, setVideos] = useState({})

  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC9u2sGj3VZpR0KAGCF_BvUw&part=snippet&maxResults=10`)
      .then(res => setVideos(res.data))
      .catch(error => console.error(`ERROR: ${error}`))
  }, [])

  console.log(videos)

  return (
    <Container
      maxWidth='lg'
      className={classes.root}
    >
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
