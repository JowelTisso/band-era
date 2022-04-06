import "./VideoListing.css";
import React, { useEffect, useState } from "react";
import { GET } from "../../../utils/axiosHelper";
import {
  CHANGE_GENRE,
  UPDATE_VIDEO_LIST,
  VIDEOS_API,
} from "../../../utils/Constants";
import VideoCard from "../../../components/video/VideoCard";
import { useVideo } from "../../../context/provider/VideoProvider";
import { Link } from "react-router-dom";
import {
  addToHistory,
  clearSelectedGenre,
  filterByGenre,
  filterByTitle,
  sortLatestVideo,
} from "./helper/videoListingHelper";
import { useAuth } from "../../../context/provider/AuthProvider";
import { combinedCategory } from "../../../db/sliderDB";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideo();
  const { selectedGenre } = videoState;
  const { authState } = useAuth();
  const [filteredVideos, setFilteredVideos] = useState([]);

  const historyHandler = (selectedVideo) => {
    const inHistory = videoState?.history.some(
      (item) => item.videoId === selectedVideo.videoId
    );
    !inHistory && addToHistory(authState, selectedVideo, videoDispatch);
  };

  const changeGenre = (genre) => {
    videoDispatch({
      type: CHANGE_GENRE,
      payload: { ...videoState, selectedGenre: genre },
    });
    filterByGenre(genre, videoState.videos, updateFilteredVideos);
  };

  const updateFilteredVideos = (list) => {
    setFilteredVideos([...list]);
  };

  const searchVideo = (e) => {
    if (e.key === "Enter") {
      filterByTitle(e.target.value, videoState.videos, updateFilteredVideos);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await GET(VIDEOS_API);
        if (res?.status === 201 || 200) {
          videoDispatch({
            type: UPDATE_VIDEO_LIST,
            payload: { ...videoState, videos: res?.data.videos },
          });
          if (selectedGenre) {
            filterByGenre(
              selectedGenre,
              res?.data.videos,
              updateFilteredVideos
            );
          } else {
            updateFilteredVideos(res?.data.videos);
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    // To scroll window to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          {selectedGenre ? selectedGenre : "All"}
        </p>
        <div className="input-container">
          <input
            type="text"
            className="input-simple"
            placeholder="Search"
            onKeyUp={searchVideo}
          />
        </div>
        <section className="user-action-section flex">
          <button
            className="btn-link btn-all-videos mg-right-5x"
            onClick={() => {
              const res = sortLatestVideo(videoState.videos);
              updateFilteredVideos(res);
            }}
          >
            Latest
          </button>
          <button
            className="btn-link btn-all-videos"
            onClick={() => {
              clearSelectedGenre(videoState, videoDispatch);
              updateFilteredVideos(videoState.videos);
            }}
          >
            All videos
          </button>
        </section>
      </div>
      <section className="content-container">
        <div className="category-menu-container mg-top-3x">
          <p className="t3 fw-1x mg-bottom-4x">Select category</p>
          {combinedCategory.map((item) => (
            <p
              className="t4 mg-top-3x pointer category-item"
              key={item._id}
              onClick={() => changeGenre(item.subCategoryName)}
            >
              {item.subCategoryName}
            </p>
          ))}
        </div>
        <main className="videos-container pd-top-4x">
          {filteredVideos.map((data) => (
            <Link
              to={`/videoplayer/${data.videoId}`}
              key={data._id}
              className="no-deco"
            >
              <div onClick={() => historyHandler(data)}>
                <VideoCard {...data} />
              </div>
            </Link>
          ))}
        </main>
      </section>
    </div>
  );
};

export { VideoListing };
