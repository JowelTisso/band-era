import "./VideoListing.css";
import React, { useEffect } from "react";
import { GET } from "../../../utils/axiosHelper";
import { UPDATE_VIDEO_LIST, VIDEOS_API } from "../../../utils/Constants";
import VideoCard from "../../../components/video/VideoCard";
import { useVideo } from "../../../context/provider/VideoProvider";
import { Link } from "react-router-dom";
import { clearSelectedGenre, filterByGenre } from "./helper/videoListingHelper";

const VideoListing = () => {
  const { videoState, videoDispatch } = useVideo();
  const { selectedGenre } = videoState;

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await GET(VIDEOS_API);
        if (status === 201 || 200) {
          if (selectedGenre) {
            filterByGenre(
              selectedGenre,
              data.videos,
              videoState,
              videoDispatch
            );
          } else {
            videoDispatch({
              type: UPDATE_VIDEO_LIST,
              payload: { ...videoState, videos: data.videos },
            });
          }
        }
        // Work around for window auto scrolling to bottom
        window.scrollTo(0, 0);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [selectedGenre]);

  return (
    <div className="video-listing-wrapper pd-1x">
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
      <main className="videos-container">
        {videoState.videos.map((data) => (
          <Link
            to={`/videoplayer/${data.videoId}`}
            key={data._id}
            className="no-deco"
          >
            <VideoCard {...data} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export { VideoListing };
