import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useVideo } from "../../../context/provider/VideoProvider";
import "./VideoPlayer.css";
import { MdThumbUp, MdOutlineThumbUpOffAlt } from "react-icons/md";
import VideoCard from "./components/videoCard/VideoCard";
import AddToPlaylistModal from "./components/addToPlaylistModal/AddToPlaylistModal";
import { useAuth } from "../../../context/provider/AuthProvider";
import {
  addLikeToVideo,
  addToWatchLater,
  removeLikeFromVideo,
} from "./helper/videoActionHelper";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideo();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [isModal, setIsModal] = useState(false);

  const { videos } = videoState;
  const { authState } = useAuth();
  const navigate = useNavigate();

  const isLiked = videoState?.likedVideos.some(
    (item) => item.videoId === selectedVideo.videoId
  );

  const inWatchLater = videoState?.watchLater.some(
    (item) => item.videoId === selectedVideo.videoId
  );

  const removeLikeHandler = () => {
    removeLikeFromVideo(authState, selectedVideo, videoDispatch, navigate);
  };

  const addLikeHandler = () => {
    addLikeToVideo(authState, selectedVideo, videoDispatch, navigate);
  };

  const watchLaterHandler = () => {
    !inWatchLater &&
      addToWatchLater(authState, selectedVideo, videoDispatch, navigate);
  };

  const toggleModal = () => {
    authState.loggedIn ? setIsModal((state) => !state) : navigate("/auth");
  };

  useEffect(() => {
    (() => {
      const video = videoState.videos.find((item) => {
        return item.videoId === videoId;
      });
      if (video) {
        setSelectedVideo(video);
      }
    })();
  }, [videoId, videoState]);

  return (
    <div className="videoplayer-wrapper">
      <main className="video-player">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <main className="mg-top-1x">
          <section className="video-detail-header flex">
            <div className="video-counts flex">
              <p className="t4 pd-right-1x fw-1x">
                {selectedVideo.views} views
              </p>
              <p className="t4 fw-1x">|</p>
              <p className="t4 pd-left-1x fw-1x">{selectedVideo.created}</p>
            </div>
            <div className="video-user-action flex">
              {isLiked ? (
                <div onClick={removeLikeHandler}>
                  <MdThumbUp className="t3 pointer" />
                </div>
              ) : (
                <div onClick={addLikeHandler}>
                  <MdOutlineThumbUpOffAlt className="t3 pointer" />
                </div>
              )}
              <p className="t4 fw-1x pointer" onClick={watchLaterHandler}>
                {inWatchLater ? "Added" : "Watch Later"}
              </p>
              <p className="t4 fw-1x pointer" onClick={toggleModal}>
                Add to Playlist
              </p>
            </div>
          </section>
          <p className="t3 fw-1x">{selectedVideo.title}</p>
          <p className="t4 fw-1x">{selectedVideo.artist}</p>
        </main>
      </main>
      <section className="video-playlist mg-top-1x mg-left-2x">
        <p className="t4">More videos</p>
        {videos.map((item) => (
          <div
            className="pointer"
            onClick={() => setSelectedVideo(item)}
            key={item.id}
          >
            <Link to={`/videoplayer/${item.videoId}`} className="no-deco">
              <VideoCard {...item} />
            </Link>
          </div>
        ))}
      </section>
      {isModal && (
        <AddToPlaylistModal
          toggleModal={toggleModal}
          selectedVideo={selectedVideo}
        />
      )}
    </div>
  );
};

export { VideoPlayer };
