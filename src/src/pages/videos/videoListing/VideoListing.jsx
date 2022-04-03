import "./VideoListing.css";
import React, { useEffect, useState } from "react";
import { GET } from "../../../utils/axiosHelper";
import { CHANGE_GENRE, VIDEOS_API } from "../../../utils/Constants";
import VideoCard from "../../../components/video/VideoCard";
import { useVideo } from "../../../context/provider/VideoProvider";
import { Link } from "react-router-dom";

const VideoListing = () => {
  const [videos, setVideos] = useState([]);

  const {
    videoState: { selectedGenre },
    videoDispatch,
  } = useVideo();

  const getVideos = async () => {
    try {
      const { status, data } = await GET(VIDEOS_API);
      if (status === 201 || 200) {
        if (selectedGenre) {
          filterByGenre(selectedGenre, data.videos);
        } else {
          setVideos(data.videos);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filterByGenre = (genre, videoList) => {
    const filteredData = videoList.filter(
      (item) => item.genre.toLowerCase() === genre.toLowerCase()
    );
    setVideos(filteredData);
  };

  const clearSelectedGenre = () => {
    videoDispatch({ type: CHANGE_GENRE, payload: "" });
  };

  useEffect(() => {
    getVideos();
  }, [selectedGenre]);

  return (
    <div className="video-listing-wrapper pd-1x">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          {selectedGenre ? selectedGenre : "All"}
        </p>
        <button
          className="btn-link btn-all-videos"
          onClick={clearSelectedGenre}
        >
          All videos
        </button>
      </div>
      <main className="videos-container">
        {videos.map(({ _id, videoId, title, thumbnail, artist }) => (
          <Link to={`/videoplayer/${videoId}`}>
            <VideoCard
              img={thumbnail}
              title={title}
              artist={artist}
              views={"40M"}
              key={_id}
            />
          </Link>
        ))}
      </main>
    </div>
  );
};

export { VideoListing };
