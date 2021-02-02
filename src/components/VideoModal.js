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
    const getVideoDetailsFromState = await videoContext.singleVideoDetails;
    if (getVideoDetailsFromState.length > 0) {
      const videoMatch = await getVideoDetailsFromState.filter((video) => videoId === video.id);
      if (videoMatch.length > 0) {
        description = videoMatch[0].snippet.description;
        setOpen(true);
        return;
      }
    }
    const requestVideoDetails = await videoContext.getSingleVideoDetails(videoId);
    description = requestVideoDetails.snippet.description
    setOpen(true)
  };

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
