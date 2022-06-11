import React, { useState } from "react";
import { useVideo } from "../../../../../context/provider/VideoProvider";
import "./AddToPlaylistModal.css";
import {
  createPlaylist,
  addToPlaylist,
} from "../../../../playlist/helper/playlistHelper";
import { callToast } from "../../../../../components/toast/Toast";

const AddToPlaylistModal = ({ toggleModal, selectedVideo }) => {
  const [newPlaylistInfo, setNewPlaylistInfo] = useState({
    title: "",
  });
  const { videoState, videoDispatch } = useVideo();
  const [isAddMode, setIsAddMode] = useState(false);

  const saveHandler = async () => {
    if (newPlaylistInfo.title) {
      const res = await createPlaylist(
        {
          title: newPlaylistInfo.title,
        },
        videoDispatch
      );
      if (res?.status === 200 || res?.status === 201) {
        toggleAddMode();
      }
    } else {
      callToast("Fill in required details!", false);
    }
  };

  const addHandler = (playlist, video, videoDispatch) => {
    const inList = playlist.videos.some((item) => item._id === video._id);
    if (!inList) {
      addToPlaylist(playlist._id, video, videoDispatch);
    } else {
      callToast("Video already added to this playlist!", callToast);
    }
  };

  const toggleAddMode = () => {
    setIsAddMode((state) => !state);
  };

  return (
    <div id="modal" className="modal">
      <div
        id="modal-backdrop"
        className="modal-backdrop"
        onClick={toggleModal}
      ></div>
      <div className="modal-content">
        <p className="t3 fw-1x">Add to playlist</p>

        <section className="modal-list-container mg-top-1x">
          {isAddMode ? (
            <div className="input-container mg-top-2x">
              <label className="input-label fw-1x">Name</label>
              <input
                type="text"
                className="input-simple"
                placeholder="Pop list"
                onChange={({ target }) =>
                  setNewPlaylistInfo((state) => ({
                    ...state,
                    title: target.value,
                  }))
                }
              />
            </div>
          ) : videoState.playlist.length > 0 ? (
            videoState.playlist.map((item) => (
              <p
                key={item._id}
                className="t4 fw-1x modal-list-item mg-top-1x pd-1x pointer pd-left-2x"
                onClick={() => addHandler(item, selectedVideo, videoDispatch)}
              >
                {item.title}
              </p>
            ))
          ) : (
            <p className="t4 fw-1x modal-list-item mg-top-1x pd-1x pointer pd-left-2x">
              Empty
            </p>
          )}
        </section>
        <div className="btn-container mg-top-2x">
          {isAddMode ? (
            <>
              <button className="btn btn-primary btn-sm" onClick={saveHandler}>
                SAVE
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={toggleAddMode}
              >
                CANCEL
              </button>
            </>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={toggleAddMode}>
              CREATE NEW PLAYLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToPlaylistModal;
