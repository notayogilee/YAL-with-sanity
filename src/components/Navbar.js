import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Button,
  Container,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '70px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    backgoundColor: '#fff',
    top: 0
  },
  '> .active': {
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
