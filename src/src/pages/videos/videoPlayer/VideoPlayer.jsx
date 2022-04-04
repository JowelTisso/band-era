import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useVideo } from "../../../context/provider/VideoProvider";
import "./VideoPlayer.css";
import { BiLike, BiDislike } from "react-icons/bi";
import VideoCard from "./components/VideoCard";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const { videoState } = useVideo();
  const [selectedVideo, setSelectedVideo] = useState({});

  const { videos } = videoState;

  useEffect(() => {
    (() => {
      const video = videoState.videos.find((item) => {
        return item.videoId === videoId;
      });
      if (video) {
        setSelectedVideo(video);
      }
    })();
  }, []);

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
              <BiLike className="t3 pointer" />
              <BiDislike className="t3 pointer" />
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
