import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '8vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'sticky',
    color: '#668582',
    top: 0,
    zIndex: 5,
    background: 'rgba(138,172,168,0.3)'
  },

}))

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Button>
        <Link
          activeClass="active"
          to="landing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Typography
            variant="h5"
            style={{
              color: "#3b5856",

            }}
          >
            Top
        </Typography>

        </Link>
      </Button>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button>
          <Typography
            variant="h5"
            style={{ color: "#3b5856" }}
          >
            ABOUT
        </Typography>
        </Button>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Button>
          <Typography
            variant="h5"
            style={{ color: "#3b5856" }}
          >
            contact
        </Typography>
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar
