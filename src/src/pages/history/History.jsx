import "./History.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/provider/AuthProvider";
import { useVideo } from "../../context/provider/VideoProvider";
import { addToWatchLater } from "../videos/videoPlayer/helper/videoActionHelper";
import HistoryCard from "./components/HistoryCard";
import { AiOutlineClose } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { removeFromHistory, clearHistory } from "./helper/historyHelper";

const History = () => {
  const { videoState, videoDispatch } = useVideo();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const watchLaterHandler = (selectedVideo) => {
    const inWatchLater = videoState?.watchLater.some(
      (item) => item.videoId === selectedVideo.videoId
    );
    !inWatchLater &&
      addToWatchLater(authState, selectedVideo, videoDispatch, navigate);
  };
  const historyHandler = (selectedVideo) => {
    removeFromHistory(authState, selectedVideo, videoDispatch, navigate);
  };

  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          You have watched {videoState.history?.length} videos
        </p>
        <button
          className="btn-link btn-all-videos"
          onClick={() => clearHistory(videoDispatch)}
        >
          Clear History
        </button>
      </div>
      <main className="videos-container pd-top-2x">
        {videoState.history.map((data) => (
          <div className="remove-badge-container" key={data._id}>
            <Link to={`/videoplayer/${data.videoId}`} className="no-deco">
              <HistoryCard {...data} data={data} />
            </Link>
            <span className="history-icon-container flex">
              <div
                className="history-hover-icon pointer"
                onClick={() => historyHandler(data)}
              >
                <AiOutlineClose className="t3 hover-icon" />
              </div>
              <div
                className="history-hover-icon pointer"
                onClick={() => watchLaterHandler(data)}
              >
                <MdWatchLater className="t3 " />
              </div>
            </span>
          </div>
        ))}
      </main>
    </div>
  );
};

export { History };
