import React from 'react';
import {
  Typography,
  Box
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
        fontSize: '0.5rem'
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  header: {
    height: '20vh',
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
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
    <header className={classes.header}>
      <Box >
        <Typography
          variant={variant}
        >
          {title}
        </Typography>
      </Box>
    </header>
  );
};

export default Header;
