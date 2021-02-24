import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Container
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import theme from './Theme'

const useStyles = makeStyles((theme) => ({
  header: {
    height: '20vh',
    minHeight: '150px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5rem',
    background: 'linear-gradient(0.25turn,#5c7d79, #8aaca8, #baded9)',
    color: "#f4f4f4",
    overflowX: 'hidden',
    '@media (max-width: 600px)': {
      padding: '1rem',
      textAlign: 'center'
    }
  },
}))

const Header = ({ title, variant }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <header className={classes.header}>
        <div>
          <Typography
            variant={variant}
          >
            {title}
          </Typography>
        </div>
        <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>

          <Link to="/">
            <Typography
              style={{ marginRight: '1rem' }}
              color="secondary"
              component="div"
              variant="h3">
              Home
            </Typography>
          </Link>

          {title.toLowerCase() !== 'blogs' &&
            <Link to="/blog">
              <Typography
                style={{ marginRight: '1rem' }}
                color="secondary"
                component="div"
                variant="h3">
                Blog
          </Typography>
            </Link>
          }

          {title.toLowerCase() !== 'videos' &&
            <Link to="/video">
              <Typography
                style={{ marginRight: '1rem' }}
                color="secondary"
                component="div"
                variant="h3">
                Videos
              </Typography>
            </Link>
          }

        </Container>
      </header>
    </ThemeProvider>
  );
};

export default Header;
