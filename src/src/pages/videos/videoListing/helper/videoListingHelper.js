import { CHANGE_GENRE, UPDATE_VIDEO_LIST } from "../../../../utils/Constants";

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
