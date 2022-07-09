import "./VideoListing.css";
import React, { useEffect } from "react";
import { GET } from "../../../utils/axiosHelper";
import { UPDATE_VIDEO_LIST, VIDEOS_API } from "../../../utils/Constants";
import VideoCard from "../../../components/video/VideoCard";
import { useVideo } from "../../../context/provider/VideoProvider";
import { Link } from "react-router-dom";
import {
  addToHistory,
  clearSelectedGenre,
  filterByGenre,
} from "./helper/videoListingHelper";
import { useAuth } from "../../../context/provider/AuthProvider";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideo();
  const { selectedGenre } = videoState;
  const { authState } = useAuth();

  const historyHandler = (selectedVideo) => {
    const inHistory = videoState?.history.some(
      (item) => item.videoId === selectedVideo.videoId
    );
    !inHistory && addToHistory(authState, selectedVideo, videoDispatch);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await GET(VIDEOS_API);
        if (res?.status === 201 || 200) {
          if (selectedGenre) {
            filterByGenre(
              selectedGenre,
              res?.data.videos,
              videoState,
              videoDispatch
            );
          } else {
            videoDispatch({
              type: UPDATE_VIDEO_LIST,
              payload: { ...videoState, videos: res?.data.videos },
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [selectedGenre, videoState, videoDispatch]);

  useEffect(() => {
    // Work around for window scroll remaining in bottom
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          {selectedGenre ? selectedGenre : "All"}
        </p>
        <button
          className="btn-link btn-all-videos"
          onClick={() => clearSelectedGenre(videoState, videoDispatch)}
        >
          All videos
        </button>
      </div>
<<<<<<< Updated upstream
      <main className="videos-container pd-top-1x">
        {videoState.videos.map((data) => (
          <Link
            to={`/videoplayer/${data.videoId}`}
            key={data._id}
            className="no-deco"
          >
            <div onClick={() => historyHandler(data)}>
=======
      <section className="content-container">
        <nav
          className={`category-menu-container mg-top-3x ${
            isCategoryMenuVisible && "show-category-menu"
          }`}
        >
          <p className="t3 fw-1x mg-bottom-4x">Select category</p>
          {combinedCategory.map((item) => (
            <button
              className="t4 mg-top-3x pointer category-item"
              key={item._id}
              onClick={() => {
                changeGenre(item.subCategoryName);
                toggleCategoryMenu();
              }}
            >
              {item.subCategoryName}
            </button>
          ))}
        </nav>
        <div
          className={`menu-backdrop ${
            isCategoryMenuVisible && "show-backdrop"
          }`}
          onClick={toggleCategoryMenu}
        ></div>
        <main className="videos-container pd-top-4x">
          {filteredVideos.map((data) => (
            <Link
              to={`/videoplayer/${data.videoId}`}
              key={data._id}
              className="no-deco video-card-link"
              onClick={() => historyHandler(data)}
            >
>>>>>>> Stashed changes
              <VideoCard {...data} />
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export { VideoListing };
