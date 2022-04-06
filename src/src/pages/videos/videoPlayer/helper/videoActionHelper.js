import { DELETE, POST } from "../../../../utils/axiosHelper";
import {
  LIKES_API,
  UPDATE_LIKED_VIDEOS,
  UPDATE_WATCH_LATER,
  WATCHLATER_API,
} from "../../../../utils/Constants";

export const addLikeToVideo = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await POST(LIKES_API, selectedVideo);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_LIKED_VIDEOS,
        payload: { likedVideos: res?.data.likes },
      });
    }
  } else {
    navigate("/auth");
  }
};

export const removeLikeFromVideo = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await DELETE(`${LIKES_API}/${selectedVideo._id}`);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_LIKED_VIDEOS,
        payload: { likedVideos: res?.data.likes },
      });
    }
  } else {
    navigate("/auth");
  }
};

export const addToWatchLater = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await POST(WATCHLATER_API, selectedVideo);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_WATCH_LATER,
        payload: { watchLater: res?.data.watchlater },
      });
    }
  } else {
    navigate("/auth");
  }
};
