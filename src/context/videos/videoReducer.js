import {
  SET_LOADING,
  GET_SINGLE_VIDEO_DETAILS,
  LOAD_VIDEOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      }
    case GET_SINGLE_VIDEO_DETAILS:
      return {
        ...state,
        video: action.payload,
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