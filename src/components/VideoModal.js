import React, { useState, useContext } from 'react';
import VideoContext from '../context/videos/videoContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '70%'
  },
}));

let description = '';
console.log(description)

const VideoModal = ({ title, videoId }) => {
  const videoContext = useContext(VideoContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const fetchDetails = async (videoId) => {
    const videoMatch = checkStorageForVideoDetails(videoId)
    if (videoMatch) {
      console.log(videoMatch)
      description = videoMatch.snippet.description;
      setOpen(true);
    } else {
      const requestVideoDetails = await videoContext.getSingleVideoDetails(videoId);
      const getVideoDetails = await videoContext.singleVideoDetails;

      const videoDetails = checkStorageForVideoDetails(videoId);

      // const selectedVideo = JSON.parse(videoDetails).filter((video) => videoId === video.id)
      console.log(videoDetails)
      description = videoDetails.snippet.description;
      setOpen(true);
    }
  };

  const checkStorageForVideoDetails = (videoId) => {
    // look in session storage before making api call
    const videoDetails = sessionStorage.getItem('singleVideoDetails');
    if (!videoDetails) {
      return;
    }
    const videoMatch = JSON.parse(videoDetails).filter((video) => videoId === video.id);

    if (videoMatch.length > 0) {
      // console.log(videoMatch[0])
      return videoMatch[0]
    }
  }

  // const openModal = (videoDetails) => {
  //   const selectedVideo = 
  // }


  // console.log(videoDescription)
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fetchDetails(videoId)
        }}>
        More Info
    </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Typography variant="h3" id="transition-modal-title">{title}</Typography>
            <Typography
              variant="body1"
              id="transition-modal-description"
              paragraph={true}
              display="block"
              noWrap={false}
            >
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>

          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default VideoModal;
