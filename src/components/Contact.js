import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Input,
  TextareaAutosize,
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
    display: 'flex',
    flexDirection: 'column',
    height: '101vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    top: 70,
    marginBottom: '4rem'
  },
  message: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
    padding: '2rem'
  },
  social: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '35%',
    backgroundColor: '#94b5b1',
    // bottom: 0,
    // right: 0,

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          className={classes.root}
          maxWidth="lg"
          name="contact"
        >
          <Typography variant="h3" component="div">
            yogialunette@gmail.com
        </Typography>

          <Paper className={classes.message} style={{ width: '70%' }}>
            <Typography
              variant="h4"
              style={{
                textAlign: 'center',
                justifyContent: 'center'
              }}>
              Send Me A Message!
          </Typography>
            <form autoComplete="off">
              <FormControl fullWidth="true" style={{ marginBottom: '1rem' }}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl fullWidth="true" style={{ marginBottom: '1rem' }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl fullWidth="true" style={{ marginBottom: '1rem' }}>
                <InputLabel htmlFor="subject">Subject</InputLabel>
                <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </FormControl>
              <FormControl fullWidth="true" style={{ marginBottom: '1rem' }}>
                <InputLabel htmlFor="message">Message</InputLabel>
                <TextareaAutosize
                  id="message"
                  rowsMin={5}
                  style={{
                    resize: "none"
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Button type="submit" style={{ display: 'block', margin: 'auto' }} variant="contained" color="primary">Send</Button>
            </form>
          </Paper>

          {/* <Container className={classes.contact}>
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
          </Container> */}

        </Container>
      </ThemeProvider>
    </>
  )
}

export default Contact
