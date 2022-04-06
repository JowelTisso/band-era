import {
  CHANGE_GENRE,
  UPDATE_VIDEO_LIST,
  UPDATE_LIKED_VIDEOS,
  UPDATE_WATCH_LATER,
  UPDATE_PLAYLIST,
  UPDATE_HISTORY,
  UPDATE_CATEGORIES,
} from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {
        ...state,
        selectedGenre: action.payload.selectedGenre,
      };
    case UPDATE_VIDEO_LIST:
      return {
        ...state,
        videos: action.payload.videos,
      };
    case UPDATE_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: action.payload.likedVideos,
      };
    case UPDATE_WATCH_LATER:
      return {
        ...state,
        watchLater: action.payload.watchLater,
      };
    case UPDATE_PLAYLIST:
      return {
        ...state,
        playlist: action.payload.playlist,
      };
    case UPDATE_HISTORY:
      return {
        ...state,
        history: action.payload.history,
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};
