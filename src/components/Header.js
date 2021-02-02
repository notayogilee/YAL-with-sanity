import React from 'react';
import {
  Typography,
  Container
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aaca8',
      light: '#baded9',
      dark: '#5c7d79'
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '1rem'
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  header: {
    height: '20vh',
    minHeight: '125px',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(0.25turn,#5c7d79, #8aaca8, #baded9)',
    color: "#f4f4f4",
    overflowX: 'hidden',
  },
}))

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container maxWidth="lg" style={{ padding: '0 5rem' }}>
        <Typography
          variant="h1"
        >
          {title}
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
