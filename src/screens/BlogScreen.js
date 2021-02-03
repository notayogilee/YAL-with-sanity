import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment';
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
  Grid,

  Typography,
  Avatar
} from '@material-ui/core';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

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
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto',
    minHeight: '100vh',
    width: '100%',
    margin: 'auto',
    padding: '5rem 0'
  },
  media: {
    flexBasis: '33.3333%',
    height: '253.125px',
    width: '450px',
    margin: 'auto',
    '@media (max-width: 600px)': {
      height: '168.75px',
      width: '300px',
    }
  }
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
            <Container>
              <Grid container spacing={10} style={{ margin: 'auto' }}>
                {(blogPosts.length > 0) && blogPosts.map((post) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={5}
                      style={{ margin: 'auto' }}
                    >
                      <Card key={post._id} className={classes.media}>
                        <CardHeader style={{ display: 'flex' }}
                          avatar={
                            <Avatar
                              src={urlFor(post.authorImage).url()}
                              alt={post.name}
                              style={{ width: '80px', height: '80px' }}
                            />
                          }
                          title={post.title}
                          subheader={`Published on: ${moment(post.publishedAt).format("DD-MM-YYYY")}`}
                        />
                        <CardMedia
                          className={classes.media}
                          image={post.mainImage.asset.url}
                          alt={post.title}
                        />
                      </Card>
                    </Grid>
                  )
                }
                )
                }
              </Grid>
            </Container>
          )
        }
      </Container>
    </ThemeProvider>
  )
}

export default BlogScreen
