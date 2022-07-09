import "./Playlist.css";
import React, { useState } from "react";
import AddPlaylistModal from "../../components/playlist/AddPlaylistModal";
import { useVideo } from "../../context/provider/VideoProvider";
import { deletePlaylist } from "./helper/playlistHelper";
import { IoAdd } from "react-icons/io5";
import PlaylistCard from "./components/PlaylistCard";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";

const Playlist = () => {
  const { videoState, videoDispatch } = useVideo();
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((isActive) => !isActive);
  };

  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          You have {videoState.playlist.length} playlist
        </p>
        <button
          className="btn-link btn-all-videos flex-center"
          onClick={toggleModal}
        >
          <IoAdd className="t3" />
          Create new playlist
        </button>
      </div>
      <main className="playlist-container pd-top-1x pd-left-5x pd-right-6x">
        {videoState.playlist.map((data) => (
          <div className="playlist-card-container" key={data._id}>
            <Link to={`/single-playlist/${data._id}`} className="no-deco">
              <PlaylistCard {...data} />
            </Link>
            <span className="history-icon-container flex mg-top-2x">
              <IoMdTrash
                className="hover-icon pointer t3"
                onClick={() => deletePlaylist(data._id, videoDispatch)}
              />
            </span>
          </div>
        ))}
      </main>
      {isModal && <AddPlaylistModal toggleModal={toggleModal} />}
    </div>
  );
};

export { Playlist };
