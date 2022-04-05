import React, { useState } from "react";
import toast from "react-hot-toast";
import { useVideo } from "../../context/provider/VideoProvider";
import { createPlaylist } from "../../pages/playlist/helper/playlistHelper";
import "./AddPlaylistModal.css";

const AddPlaylistModal = ({ toggleModal }) => {
  const { videoDispatch } = useVideo();
  const [newPlaylistInfo, setNewPlaylistInfo] = useState({
    title: "",
    description: "",
  });

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
        toggleModal();
        toast("Playlist added successfully!");
      }
    } else {
      toast("Fill in required details!");
    }
  };

  return (
    <div id="modal" className="modal">
      <div
        id="modal-backdrop"
        className="modal-backdrop"
        onClick={toggleModal}
      ></div>
      <div className="modal-content">
        <p className="t3 fw-1x">Create new playlist</p>
        <div className="input-container mg-top-2x">
          <label className="input-label fw-1x">Name</label>
          <input
            type="text"
            className="input-simple"
            placeholder="Pop list"
            onChange={({ target }) =>
              setNewPlaylistInfo((state) => ({ ...state, title: target.value }))
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
        <div className="btn-container mg-top-4x">
          <button className="btn btn-primary btn-sm" onClick={saveHandler}>
            SAVE
          </button>
          <button className="btn btn-secondary btn-sm" onClick={toggleModal}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlaylistModal;
