import React, { useReducer } from 'react';
import axios from 'axios';
import VideoContext from './videoContext';
import VideoReducer from './videoReducer';
import {
  SET_LOADING,
  LOAD_VIDEOS,
  LOAD_MORE_VIDEOS,
  GET_SINGLE_VIDEO_DETAILS
} from '../types';

const VideoState = (props) => {

  // look in sessionStorage for videos to avoid unnecessary API calls - else set to empty object
  const videosFromSessionStorage = sessionStorage.getItem('videos') ? JSON.parse(sessionStorage.getItem('videos')) : {}

  const singleVideoDetailsFromStorage = sessionStorage.getItem('singleVideoDetails') ? JSON.parse(sessionStorage.getItem('singleVideoDetails')) : []

  // set results to initial state
  const initialState = {
    singleVideoDetails: singleVideoDetailsFromStorage,
    videos: videosFromSessionStorage,
    loading: false
  }

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  // load all videos from youtube API
  const loadVideos = async () => {
    setLoading();

    // API request to load all videos
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC9u2sGj3VZpR0KAGCF_BvUw&part=snippet&maxResults=10`)

    // Dispatch results to reducer to be available to app
    dispatch({
      type: LOAD_VIDEOS,
      payload: res.data
    });

    // set videos to session storage to avoid API calls on page refresh
    sessionStorage.setItem('videos', JSON.stringify(res.data));
  };

  // Load next page of videos
  const loadMoreVideos = async (token) => {
    setLoading();

    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?pageToken=${token}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC9u2sGj3VZpR0KAGCF_BvUw&part=snippet&maxResults=10`)

    const { items, nextPageToken } = res.data;

    // add new set of videos to state so not to lose previous set of videos
    state.videos.items = state.videos.items.concat(items);
    // update nextPageToken
    state.videos.nextPageToken = nextPageToken

    dispatch({
      type: LOAD_MORE_VIDEOS,
      payload: { ...state.videos }
    })

    // update session storage with new videos state
    sessionStorage.setItem('videos', JSON.stringify(state.videos))
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  // get full description of video
  const getSingleVideoDetails = async (videoId) => {
    setLoading();

    // make request to API
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

    // Update state for single video description
    state.singleVideoDetails = state.singleVideoDetails.concat(res.data.items)

    // Dispatch to reducer
    dispatch({
      type: GET_SINGLE_VIDEO_DETAILS,
      payload: [...state.singleVideoDetails]
    })

    // Set to session storage in case called again
    sessionStorage.setItem('singleVideoDetails', JSON.stringify(state.singleVideoDetails));
  }

  return <VideoContext.Provider
    value={{
      videos: state.videos,
      singleVideoDetails: state.singleVideoDetails,
      loading: state.loading,
      loadVideos,
      getSingleVideoDetails,
      loadMoreVideos
    }}
  >
    {props.children}
  </VideoContext.Provider>
}

export default VideoState;