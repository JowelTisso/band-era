import React from "react";
import "./VideoCard.css";

const VideoCard = ({ img, title, artist, views }) => {
  return (
    <div className="video-card pointer">
      <img src={img} alt="thumbnail" className="video-thumb mg-top-2x" />
      <p className="t4 mg-top-1x video-title ">{title}</p>
      <span className="video-info-container mg-top-1x">
        <p className="t5">{artist}</p>
        <p className="t5">{views} views</p>
      </span>
    </div>
  );
};

export default VideoCard;
