import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Paper
} from '@material-ui/core';

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
  const blogPosts = blogContext.blogPosts;

  const classes = useStyles();


  useEffect(() => {
    if (!blogPosts[0]) {
      console.log('request made')
      blogContext.loadBlogPosts();
    }
    return;
  }, []);


  if (blogPosts) {
    console.log(blogPosts)
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h1" style={{ textAlign: 'center', padding: '1rem' }} >
        Blogs
      </Typography>

      {blogPosts.length > 0 ? blogPosts.map((post) => {
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
        )}

    </Container>
  )
}

export default BlogScreen
