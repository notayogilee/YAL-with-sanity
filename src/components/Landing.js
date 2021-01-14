import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Container,
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';
import video from '../images/Landing.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#f4f4f4'
  }
}))

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Container
        className={classes.root}
        maxWidth="lg"
        name="landing"
      >
        <Typography>
          HomeScreen
      </Typography>
        <Card>
          <CardMedia
            src={video}
          />
        </Card>
      </Container>
    </div>
  )
}

export default Landing
