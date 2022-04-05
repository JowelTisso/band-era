import React, { useState } from "react";
import { useVideo } from "../../../../../context/provider/VideoProvider";
import "./AddToPlaylistModal.css";
import {
  createPlaylist,
  addToPlaylist,
} from "../../../../playlist/helper/playlistHelper";
import toast from "react-hot-toast";

const AddToPlaylistModal = ({ toggleModal, selectedVideo }) => {
  const [newPlaylistInfo, setNewPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  const { videoState, videoDispatch } = useVideo();
  const [isAddMode, setIsAddMode] = useState(false);

  const saveHandler = () => {
    if (newPlaylistInfo.title && newPlaylistInfo.description) {
      const res = createPlaylist(
        {
          title: newPlaylistInfo.title,
          description: newPlaylistInfo.description,
        },
        videoDispatch
      );

      if (res?.status === 200 || 201) {
        toggleAddMode();
        toast("Playlist added successfully!");
      }
    } else {
      toast("Fill in required details!");
    }
  };

  const addHandler = async (playlist, video, videoDispatch) => {
    const inList = playlist.videos.some((item) => item._id === video._id);
    if (!inList) {
      const res = await addToPlaylist(playlist, video, videoDispatch);
      if (res?.status === 200 || 201) {
        toast("Added to playlist!");
      }
    } else {
      toast("Video already added to this playlist!");
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
            <>
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
              <div className="input-container fw-1x mg-top-2x">
                <label className="input-label">Description</label>
                <input
                  type="text"
                  className="input-simple"
                  placeholder="Evergreen songs"
                  onChange={({ target }) =>
                    setNewPlaylistInfo((state) => ({
                      ...state,
                      description: target.value,
                    }))
                  }
                />
              </div>
            </>
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
