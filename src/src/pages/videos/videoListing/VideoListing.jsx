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
import { IoSearch } from "react-icons/io5";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideo();
  const { selectedGenre } = videoState;
  const { authState } = useAuth();
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [isCategoryMenuVisible, setIsCategoryMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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

  const toggleCategoryMenu = () => {
    setIsCategoryMenuVisible((isVisible) => !isVisible);
  };

  const toggleSearch = () => {
    setIsSearchVisible((isVisible) => !isVisible);
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
    <div className="main-wrapper video-listing-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre" onClick={toggleCategoryMenu}>
          {selectedGenre ? selectedGenre : "All"}
        </p>
        <button className="flex-center search-icon" onClick={toggleSearch}>
          <IoSearch className="t3" />
        </button>
        <div
          className={`input-container search-container ${
            isSearchVisible && "show-search"
          }`}
        >
          <input
            type="text"
            className="input-simple"
            placeholder="Search"
            onKeyUp={searchVideo}
          />
        </div>
        <div
          className={`menu-backdrop ${isSearchVisible && "show-backdrop"}`}
          onClick={toggleSearch}
        ></div>
        <section className="user-action-section flex">
          <button
            className="btn-link btn-all-videos"
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
              onClick={() => changeGenre(item.subCategoryName)}
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
              <VideoCard {...data} />
            </Link>
          ))}
        </main>
      </section>
    </div>
  );
};

export { VideoListing };
