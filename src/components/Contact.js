import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Grid,
  Typography,
  IconButton,

} from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#94b5b1',
      main: '#668582',
      dark: '#3b5856',
      contrastText: '#fff'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: '95vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  social: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '35%',
    backgroundColor: '#94b5b1',
    bottom: 0,
    right: 0,

  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',
    margin: 'auto'
  },
  contact: {
    paddingBottom: '200px'
  }
}))

// social icons
// contact form 
// email

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          className={classes.root}
          maxWidth="lg"
          name="contact"
        >
          <Typography>
            yogialunette@gmail.com
        </Typography>
          <Container className={classes.contact}>
            <Paper className={classes.social} xs={12} sm={8} md={6} lg={3}>
              <Grid container spacing={0}  >
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.icons}>
                  <IconButton>
                    <SocialIcon
                      url='https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ height: 75, width: 75 }}
                      bgColor='#3b5856'
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.icons}>
                  <IconButton>
                    <SocialIcon
                      url='https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ height: 75, width: 75 }}
                      bgColor='#3b5856'
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.icons}>
                  <IconButton>
                    <SocialIcon
                      url='https://www.instagram.com/yogialunette/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ height: 75, width: 75 }}
                      bgColor='#3b5856'
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.icons}>
                  <IconButton>
                    <SocialIcon
                      url='https://www.linkedin.com/in/claudia-viens-8233b1aa/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ height: 75, width: 75 }}
                      bgColor='#3b5856'
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Container>

        </Container>
      </ThemeProvider>
    </>
  )
}

export default Contact
