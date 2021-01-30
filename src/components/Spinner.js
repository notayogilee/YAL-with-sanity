import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    margin: 'auto',
    padding: 0
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}))

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <CircularProgress
        color="primary"
        size={140}
        thickness={4.0}
      />
    </div>
  );
};

export default Spinner;
