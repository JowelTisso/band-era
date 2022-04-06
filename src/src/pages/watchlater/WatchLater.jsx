import "./WatchLater.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VideoCard from "../../components/video/VideoCard";
import { useVideo } from "../../context/provider/VideoProvider";
import { removeFromWatchLater } from "./helper/WatchLaterHelper";
import { useAuth } from "../../context/provider/AuthProvider";
import { IoMdTrash } from "react-icons/io";

const WatchLater = () => {
  const { videoState, videoDispatch } = useVideo();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const removeHandler = (selectedVideo) => {
    removeFromWatchLater(authState, selectedVideo, videoDispatch, navigate);
  };
  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          You have {videoState.watchLater?.length} videos in watch later
        </p>
      </div>
      <main className="videos-container pd-top-2x">
        {videoState.watchLater?.map((data) => (
          <div className="remove-badge-container" key={data._id}>
            <Link to={`/videoplayer/${data.videoId}`} className="no-deco">
              <VideoCard {...data} />
            </Link>
            <IoMdTrash
              className="remove-badge pointer t3"
              onClick={() => removeHandler(data)}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export { WatchLater };
