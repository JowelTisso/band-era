import { CHANGE_GENRE, UPDATE_VIDEO_LIST } from "../../utils/Constants";

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
    default:
      return state;
  }
};
