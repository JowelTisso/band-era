import { DELETE, POST } from "../../../utils/axiosHelper";
import { PLAYLIST_API, UPDATE_PLAYLIST } from "../../../utils/Constants";

export const createPlaylist = async (playlistInfo, videoDispatch) => {
  const res = await POST(PLAYLIST_API, playlistInfo, true);
  if (res?.status === 200 || 201) {
    videoDispatch({
      type: UPDATE_PLAYLIST,
      payload: { playlist: res?.data.playlists },
    });
  }
  return res;
};

export const addToPlaylist = async (
  playlistId,
  selectedVideo,
  videoDispatch
) => {
  const res = await POST(`${PLAYLIST_API}/${playlistId}`, selectedVideo);
  if (res?.status === 200 || 201) {
    videoDispatch({
      type: UPDATE_PLAYLIST,
      payload: { playlist: res?.data.playlist || [] },
    });
  }
  return res;
};

export const deletePlaylist = async (playlistId, videoDispatch) => {
  const res = await DELETE(`${PLAYLIST_API}/${playlistId}`);
  if (res?.status === 200 || 201) {
    videoDispatch({
      type: UPDATE_PLAYLIST,
      payload: { playlist: res?.data.playlists || [] },
    });
  }
};

export const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  videoDispatch
) => {
  const res = await DELETE(`${PLAYLIST_API}/${playlistId}/${videoId}`);
  if (res?.status === 200 || 201) {
    videoDispatch({
      type: UPDATE_PLAYLIST,
      payload: { playlist: res?.data.playlists || [] },
    });
  }
};
