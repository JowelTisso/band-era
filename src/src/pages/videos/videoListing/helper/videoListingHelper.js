import { POST } from "../../../../utils/axiosHelper";
import {
  CHANGE_GENRE,
  HISTORY_API,
  UPDATE_HISTORY,
  UPDATE_VIDEO_LIST,
} from "../../../../utils/Constants";

export const filterByGenre = (genre, videoList, videoState, videoDispatch) => {
  const filteredData = videoList.filter(
    (item) => item.genre.toLowerCase() === genre.toLowerCase()
  );
  videoDispatch({
    type: UPDATE_VIDEO_LIST,
    payload: { ...videoState, videos: filteredData },
  });
};

export const clearSelectedGenre = (videoState, videoDispatch) => {
  videoDispatch({
    type: CHANGE_GENRE,
    payload: { ...videoState, selectedGenre: "" },
  });
};

export const addToHistory = async (authState, selectedVideo, videoDispatch) => {
  if (authState.loggedIn) {
    const res = await POST(HISTORY_API, selectedVideo);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_HISTORY,
        payload: { history: res?.data.history || [] },
      });
    }
  }
};
