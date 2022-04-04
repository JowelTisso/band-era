import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useVideo } from "../../../context/provider/VideoProvider";
import "./VideoPlayer.css";
import { MdThumbUp, MdOutlineThumbUpOffAlt } from "react-icons/md";
import VideoCard from "./components/VideoCard";
import { DELETE, POST } from "../../../utils/axiosHelper";
import { LIKES_API, UPDATE_LIKED_VIDEOS } from "../../../utils/Constants";
import { useAuth } from "../../../context/provider/AuthProvider";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideo();
  const [selectedVideo, setSelectedVideo] = useState({});

  const { videos } = videoState;
  const { authState } = useAuth();
  const navigate = useNavigate();

  const addLikeToVideo = async () => {
    if (authState.loggedIn) {
      const res = await POST(LIKES_API, selectedVideo);
      if (res?.status === 200 || 201) {
        videoDispatch({
          type: UPDATE_LIKED_VIDEOS,
          payload: { likedVideos: res?.data.likes },
        });
      }
    } else {
      navigate("/auth");
    }
  };

  const removeLikeFromVideo = async () => {
    if (authState.loggedIn) {
      const res = await DELETE(`${LIKES_API}/${selectedVideo._id}`);
      if (res?.status === 200 || 201) {
        videoDispatch({
          type: UPDATE_LIKED_VIDEOS,
          payload: { likedVideos: res?.data.likes },
        });
      }
    } else {
      navigate("/auth");
    }
  };

  const isLiked = videoState.likedVideos.some(
    (item) => item.videoId === selectedVideo.videoId
  );

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
                <div onClick={removeLikeFromVideo}>
                  <MdThumbUp className="t3 pointer" />
                </div>
              ) : (
                <div onClick={addLikeToVideo}>
                  <MdOutlineThumbUpOffAlt className="t3 pointer" />
                </div>
              )}
              <p className="t4 fw-1x pointer">Watch Later</p>
              <p className="t4 fw-1x pointer">Add to Playlist</p>
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
    </div>
  );
};

export { VideoPlayer };
