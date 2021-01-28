import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoContext from '../context/videos/videoContext';
import {
  Container
} from '@material-ui/core';
// import {
//   makeStyles,
//   createMuiTheme,
//   ThemeProvider
// } from '@material-ui/core/styles';

const VideoDetailsScreen = () => {
  const videoContext = useContext(VideoContext);
  const videos = videoContext.videos;

  // get id from params
  const { id } = useParams();

  // get single video details from state
  const singleVideoDetails = (id) => {
    return videos.items.filter((video) => video.id.videoId === id)[0];
  }

  const video = singleVideoDetails(id)

  return (
    <Container maxWidth="lg">
      <h1>{video.snippet.title}</h1>
    </Container>
  )
}

export default VideoDetailsScreen
