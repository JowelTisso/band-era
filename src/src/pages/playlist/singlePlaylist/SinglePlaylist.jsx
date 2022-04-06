import "./SinglePlaylist.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HistoryCard from "../../../pages/history/components/HistoryCard";
import { useVideo } from "../../../context/provider/VideoProvider";
import { deleteVideoFromPlaylist } from "../helper/playlistHelper";
import { IoMdTrash } from "react-icons/io";

const SinglePlaylist = () => {
  const { videoState, videoDispatch } = useVideo();
  const { playlistId } = useParams();
  const [playlistVideos, setPlaylistVideos] = useState([]);

  useEffect(() => {
    (() => {
      const playlist = videoState.playlist.find(
        (item) => item._id === playlistId
      );
      setPlaylistVideos(playlist.videos);
    })();
  }, [videoState.playlist, playlistId]);

  return (
    <div className="main-wrapper">
      <div className="video-listing-header">
        <p className="t3 video-genre">
          You have {playlistVideos.length} videos
        </p>
      </div>
      <main className="videos-container pd-top-2x">
        {playlistVideos.length > 0 ? (
          playlistVideos.map((data) => (
            <div className="remove-badge-container" key={data._id}>
              <Link to={`/videoplayer/${data.videoId}`} className="no-deco">
                <HistoryCard {...data} data={data} />
              </Link>
              <span className="history-icon-container flex">
                <IoMdTrash
                  className="hover-icon pointer t3"
                  onClick={() =>
                    deleteVideoFromPlaylist(playlistId, data._id, videoDispatch)
                  }
                />
              </span>
            </div>
          ))
        ) : (
          <p className="t3 mg-top-2x fw-1x">Add videos to playlist</p>
        )}
      </main>
    </div>
  );
};

export { SinglePlaylist };
