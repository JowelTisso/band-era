import { DELETE } from "../../../utils/axiosHelper";
import { UPDATE_WATCH_LATER, WATCHLATER_API } from "../../../utils/Constants";

export const removeFromWatchLater = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await DELETE(`${WATCHLATER_API}/${selectedVideo._id}`);
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
