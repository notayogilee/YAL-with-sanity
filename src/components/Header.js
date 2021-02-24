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
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      padding: '0 3rem',
    },
    '@media (max-width: 600px)': {
      padding: '0 1rem',
    }
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      padding: '0 1rem',
      textAlign: 'right'
    }
  },
  navItem: {
    marginRight: '1rem',
    '@media (max-width: 600px)': {
      margin: '0.25rem 0 '
    }
  }
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
        <Container className={classes.nav}>

          <Link to="/">
            <Typography
              className={classes.navItem}
              color="secondary"
              component="div"
              variant="h3">
              Home
            </Typography>
          </Link>

          {title.toLowerCase() !== 'blogs' &&
            <Link to="/blog">
              <Typography
                className={classes.navItem}
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
                className={classes.navItem}
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
