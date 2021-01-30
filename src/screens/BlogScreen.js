import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Avatar
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aaca8',
      light: '#baded9',
      dark: '#5c7d79'
    },
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
    minHeight: '100vh',
    height: 'auto',
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
}))

const BlogScreen = () => {
  const blogContext = useContext(BlogContext);
  const { blogPosts, loading } = blogContext;

  const classes = useStyles();

  useEffect(() => {
    if (!blogPosts[0]) {
      console.log('request made')
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
      <Header title={"Blogs"} />
      <Container maxWidth="lg" className={classes.root}>
        {loading ? (
          <Spinner />
        ) : (

            blogPosts.length > 0 ? blogPosts.map((post) => {
              return (
                <Card key={post._id}>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt={post.name}
                        src={post.authorImage}
                      />
                    }
                  />
                  <Typography variant="h3">
                    {post.title}
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image={post.mainImage.asset.url}
                    alt={post.title}
                  />
                </Card>
              )
            }) : (
                <Typography variant="h1">
                  Blogs are unavailable
                </Typography>
              )

          )}
      </Container>
    </ThemeProvider>
  )
}

export default BlogScreen
