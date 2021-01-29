import React, { useReducer } from 'react';
import sanityClient from '../../client';
import BlogContext from './blogContext';
import BlogReducer from '../blog/blogReducer';
import {
  SET_LOADING,
  LOAD_BLOG_POSTS
} from '../types';

const BlogState = (props) => {

  // look in sessionStorage for blogs to avoid unnecessary API calls - else set to empty array
  const blogsFromSessionStorage = sessionStorage.getItem('blogs') ? JSON.parse(sessionStorage.getItem('blogs')) : []

  // set results to initial state
  const initialState = {
    blogPosts: blogsFromSessionStorage,
    loading: false
  }

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // load all blogs from sanity API
  const loadBlogPosts = async () => {
    dispatch({ type: SET_LOADING });
    console.log('blog request made')
    const res = await sanityClient.fetch(`*[_type == "post"]{
      _id,
      title,
      slug,
      author,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`);

    dispatch({
      type: LOAD_BLOG_POSTS,
      payload: res
    })

    // set blogs to session storage to avoid API calls on page refresh
    sessionStorage.setItem('blogs', JSON.stringify(res));
  }

  return <BlogContext.Provider
    value={{
      blogPosts: state.blogPosts,
      loading: state.loading,
      loadBlogPosts
    }}
  >
    {props.children}
  </BlogContext.Provider>
}

export default BlogState;