import React, { useContext, useEffect } from 'react';
import VideoContext from '../context/videos/videoContext';
import ReactPlayer from 'react-player/youtube';
import {
  Container,
  Box,
  Card,
  Grid,
  Button,
  Slide,
  Typography
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
    alignItems: 'center'
  }
}))

const VideoScreen = () => {
  const videoContext = useContext(VideoContext);

  // add if-statement to reduce API calls on refresh or page navigation
  useEffect(() => {
    if (!videos.items) {
      videoContext.loadVideos();
    }
  }, [])

  const videos = videoContext.videos
  const classes = useStyles();
  if (videos.items) {
    console.log(videos.items)
  }

  return (
    <div className={classes.root}>
      {/* <h1>Videos</h1> */}

      <Grid container spacing={6}>
        {videos.items && videos.items.map((video) => {
          // api returns playlists as well. I just want videos with videoId
          return (video.id.videoId &&
            <Grid item xs={4}>
              <Card key={video.etag} style={{ padding: '8px' }}>
                <ReactPlayer
                  controls
                  width="560px"
                  height="315px"
                  url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                />
                <Button>More Info</Button>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
    </div>
  )
}

export default VideoScreen
