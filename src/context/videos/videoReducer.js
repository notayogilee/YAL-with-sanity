import { PersonalVideo } from '@material-ui/icons';
import {
  SET_LOADING,
  GET_SINGLE_VIDEO_DETAILS,
  LOAD_MORE_VIDEOS,
  LOAD_VIDEOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_VIDEOS:
    case LOAD_MORE_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      }
    case GET_SINGLE_VIDEO_DETAILS:
      return {
        ...state,
        singleVideoDetails: action.payload,
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