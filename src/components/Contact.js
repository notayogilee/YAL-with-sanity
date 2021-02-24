import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
  Hidden
} from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import theme from './Theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'auto',
    minHeight: '100vh',
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
    height: '50%',
    width: '100%'
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
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
          <Hidden smUp>
            <Container className={classes.social}>
              <Box style={{ display: 'flex', padding: '1rem 1rem', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <Button style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </Button>
                <Button style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://www.instagram.com/yogialunette/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </Button>
                <Button style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://www.linkedin.com/in/claudia-viens-8233b1aa/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </Button>
                <Button style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://www.twitch.tv/yogialunette'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </Button>
                <Button style={{ padding: '6px' }}>
                  <SocialIcon
                    url='https://open.spotify.com/user/ct8g7uxyny4fsgoe0m1qwy5re'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 42, width: 42 }}
                    bgColor='#8aaca8'
                  />
                </Button>
              </Box>
            </Container>
          </Hidden>

          <Hidden xsDown>
            <Container className={classes.social}>
              <Box>
                <IconButton>
                  <SocialIcon
                    url='https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    url='https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    url='https://www.instagram.com/yogialunette/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    url='https://www.linkedin.com/in/claudia-viens-8233b1aa/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    url='https://www.twitch.tv/yogialunette'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    url='https://open.spotify.com/user/ct8g7uxyny4fsgoe0m1qwy5re'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ height: 80, width: 80 }}
                    bgColor='#8aaca8'
                  />
                </IconButton>
              </Box>
            </Container>
          </Hidden>

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
                  <Typography
                    color='secondary'

                  > Send</Typography>
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
