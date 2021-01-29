import React, { useReducer } from 'react';
import axios from 'axios';
import VideoContext from './videoContext';
import VideoReducer from './videoReducer';
import {
  SET_LOADING,
  LOAD_VIDEOS
} from '../types';

const VideoState = (props) => {

  // look in sessionStorage for videos to avoid unnecessary API calls - else set to empty object
  const videosFromSessionStorage = sessionStorage.getItem('videos') ? JSON.parse(sessionStorage.getItem('videos')) : {}

  // set results to initial state
  const initialState = {
    videos: videosFromSessionStorage,
    loading: false
  }

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  // load all videos from youtube API
  const loadVideos = async () => {
    setLoading();

    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC9u2sGj3VZpR0KAGCF_BvUw&part=snippet&maxResults=10`)

    dispatch({
      type: LOAD_VIDEOS,
      payload: res.data
    });

    // set videos to session storage to avoid API calls on page refresh
    sessionStorage.setItem('videos', JSON.stringify(res.data));
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <VideoContext.Provider
    value={{
      videos: state.videos,
      loading: state.loading,
      loadVideos
    }}
  >
    {props.children}
  </VideoContext.Provider>
}

export default VideoState;