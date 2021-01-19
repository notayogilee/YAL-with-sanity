import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#668582' }
  },
  typography: {
    h3: {
      fontSize: '2.4rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem'
      },
    },
    h1: {
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '4rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    top: 70,
    padding: '3rem 0.25rem',
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    width: '100%'
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10vh',
  }
}))

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
          <Container >
            <Typography
              variant="h3"
              color="primary"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10vh',
                fontFamily: 'Raleway'
              }}
            >
              YOGIALUNETTE@GMAIL.COM
            </Typography>
          </Container>

          <Container className={classes.social}>
            <Box>
              <IconButton>
                <SocialIcon
                  url='https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: 40, width: 40 }}
                  bgColor='#668582'
                />
              </IconButton>
              <IconButton>
                <SocialIcon
                  url='https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: 40, width: 40 }}
                  bgColor='#668582'
                />
              </IconButton>
              <IconButton>
                <SocialIcon
                  url='https://www.instagram.com/yogialunette/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: 40, width: 40 }}
                  bgColor='#668582'
                />
              </IconButton>
              <IconButton>
                <SocialIcon
                  url='https://www.linkedin.com/in/claudia-viens-8233b1aa/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: 40, width: 40 }}
                  bgColor='#668582'
                />
              </IconButton>
              <IconButton>
                <SocialIcon
                  url='https://www.twitch.tv/yogialunette'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: 40, width: 40 }}
                  bgColor='#668582'
                />
              </IconButton>
            </Box>
          </Container>

          <Container maxWidth="md" className={classes.message}>
            <Paper style={{ padding: '1rem' }} elevation={5}>

              <form autoComplete="off">
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.25rem' }}>
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </FormControl>
                <FormControl fullWidth={true} style={{ marginBottom: '0.5rem' }}>
                  <TextField
                    id="message"
                    multiline
                    label="message"
                    style={{
                      resize: "none",
                      marginBottom: '0.25rem'
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  style={{ display: 'block', margin: 'auto' }}
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              </form>
            </Paper>
          </Container>



        </Container>
      </ThemeProvider>
    </>
  )
}

export default Contact
