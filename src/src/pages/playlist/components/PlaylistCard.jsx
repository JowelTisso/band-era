import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = ({ title, description, videos }) => {
  return (
    <div className="card card-only-text">
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-sub-title">{videos.length} videos</p>
        <p className="card-description mg-top-2x">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
