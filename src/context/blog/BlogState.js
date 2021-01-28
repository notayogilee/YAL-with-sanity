import React, { useReducer } from 'react';
import sanityClient from '../../client';
import BlogContext from './blogContext';
import BlogReducer from '../blog/blogReducer';
import {
  SET_LOADING,
  LOAD_BLOG_POSTS
} from '../types';

const BlogState = (props) => {
  const initialState = {
    blogPosts: [],
    loading: false
  }

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const loadBlogPosts = async () => {
    dispatch({ type: SET_LOADING });
    console.log('before request')
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