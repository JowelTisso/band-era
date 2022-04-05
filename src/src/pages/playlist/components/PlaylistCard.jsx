import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = ({ title, description, videos }) => {
  return (
    <div class="card card-only-text">
      <div class="card-content">
        <p class="card-title">{title}</p>
        <p class="card-sub-title">{videos.length} videos</p>
        <p class="card-description mg-top-2x">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
