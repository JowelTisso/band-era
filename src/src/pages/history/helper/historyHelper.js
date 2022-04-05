import { DELETE } from "../../../utils/axiosHelper";
import { HISTORY_API, UPDATE_HISTORY } from "../../../utils/Constants";

export const removeFromHistory = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await DELETE(`${HISTORY_API}/${selectedVideo._id}`);
    if (res?.status === 200 || 201) {
      videoDispatch({
        type: UPDATE_HISTORY,
        payload: { history: res?.data.history },
      });
    }
  } else {
    navigate("/auth");
  }
};

export const clearHistory = async (videoDispatch) => {
  const res = await DELETE(`${HISTORY_API}/all`);
  if (res?.status === 200 || 201) {
    videoDispatch({
      type: UPDATE_HISTORY,
      payload: { history: [] },
    });
  }
};
