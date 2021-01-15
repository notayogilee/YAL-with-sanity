import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Button,
  IconButton,
  Container,
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
    backgoundColor: '#fff',
    top: 0,
    zIndex: 5
  },
  ' & > .active': {
    borderBottom: 'solid 1px #333'
  }
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
          Top
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
          About
      </Button>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button>
          Contact
      </Button>
      </Link>
    </nav>
  )
}

export default Navbar
