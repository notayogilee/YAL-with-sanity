import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  Container,
  Hidden,
  Grid,
  ButtonBase,
  Typography,
} from '@material-ui/core';
import theme from '../components/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '80vh',
    minWidth: '100vw',
    margin: 'auto',
    overflowX: 'hidden',
    padding: '2rem 1rem'
  },
  image: {
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'absolute',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    width: '100%',
    textAlign: 'left',
    background: 'linear-gradient(0deg, rgba(10,10,10,0.9), rgba(10,10,10,0.2) )'
  },
}))

const BlogScreen = () => {
  const blogContext = useContext(BlogContext);
  const { blogPosts, loading } = blogContext;

  const classes = useStyles();

  useEffect(() => {
    if (!blogPosts[0]) {
      blogContext.loadBlogPosts();
    }
    return;
    // eslint-disable-next-line
  }, []);


  if (blogPosts) {
    console.log(blogPosts)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header title={"Blogs"} variant={"h1"} />
      <Container className={classes.root} disableGutters>
        {loading ? (
          <Spinner />
        ) : (
            <>
              <Grid
                container
                spacing={10}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'auto'
                }}>
                {(blogPosts.length > 0) && blogPosts.map((post) => {
                  return (
                    <Grid
                      item
                      key={post._id}
                      xs={12}
                      sm={8}
                      md={5}
                      lg={5}
                      style={{ alignItems: 'center' }}
                    >
                      <ButtonBase
                        focusRipple
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                      >
                        <span
                          className={classes.imageSrc}
                          style={{
                            backgroundImage: `url(${post.mainImage.asset.url})`
                          }}
                        />
                        <Hidden mdDown>
                          <span className={classes.imageBackdrop} />
                        </Hidden>
                        <span className={classes.imageButton}>
                          <Typography
                            component="h6"
                            variant="h6"
                            color="inherit"
                            className={classes.imageTitle}
                          >
                            {post.title}
                          </Typography>
                        </span>
                      </ButtonBase>
                    </Grid>
                  )
                }
                )
                }
              </Grid>
            </>
          )
        }
      </Container>
    </ThemeProvider>
  )
}

export default BlogScreen
