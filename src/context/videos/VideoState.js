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
import { PersonalVideo } from '@material-ui/icons';

const VideoState = (props) => {

  // look in sessionStorage for videos to avoid unnecessary API calls - else set to empty object
  const videosFromSessionStorage = sessionStorage.getItem('videos') ? JSON.parse(sessionStorage.getItem('videos')) : {}

  // set results to initial state
  const initialState = {
    singleVideoDetails: {},
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

  // Load next page of videos
  const loadMoreVideos = async (token) => {
    setLoading();

    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?pageToken=${token}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC9u2sGj3VZpR0KAGCF_BvUw&part=snippet&maxResults=10`)

    const { items, nextPageToken } = res.data;

    // add new set of videos to state so not to lose preveous set of videos
    state.videos.items = state.videos.items.concat(items);
    // update nextPageToken in case there are more videos
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

    console.log('DESCRIPTION REQUEST')

    const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

    dispatch({
      type: GET_SINGLE_VIDEO_DETAILS,
      payload: res.data.items[0]
    })
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