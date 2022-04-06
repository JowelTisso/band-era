import { DELETE } from "../../../utils/axiosHelper";
import { HISTORY_API, UPDATE_HISTORY } from "../../../utils/Constants";
import { callToast } from "../../../components/toast/Toast";

export const removeFromHistory = async (
  authState,
  selectedVideo,
  videoDispatch,
  navigate
) => {
  if (authState.loggedIn) {
    const res = await DELETE(`${HISTORY_API}/${selectedVideo._id}`);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_HISTORY,
        payload: { history: res?.data.history },
      });
      callToast("Removed successfully!");
    } else {
      callToast("Failed to remove from history!", false);
    }
  } else {
    navigate("/auth");
  }
};

export const clearHistory = async (videoDispatch) => {
  const res = await DELETE(`${HISTORY_API}/all`);
  if (res?.status === 200 || res?.status === 201) {
    videoDispatch({
      type: UPDATE_HISTORY,
      payload: { history: [] },
    });
    callToast("Cleared successfully!");
  } else {
    callToast("Failed to clear history!", false);
  }
};
