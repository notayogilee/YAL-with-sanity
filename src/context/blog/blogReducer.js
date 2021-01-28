import {
  SET_LOADING,
  LOAD_BLOG_POSTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_BLOG_POSTS:
      return {
        ...state,
        blogPosts: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
