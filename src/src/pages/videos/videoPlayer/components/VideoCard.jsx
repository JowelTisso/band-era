import React from "react";

const VideoCard = ({ title, thumbnail, artist, views, created }) => {
  return (
    <div className="mg-top-1x">
      <div class="card card-horizontal">
        <img class="card-img-horizontal" src={thumbnail} alt="card image" />
        <div class="card-content-horizontal">
          <div class="card-content">
            <p class="card-title fw-1x t4">{title}</p>
            <p class="card-sub-title fw-1x">{artist}</p>
            <span className="flex">
              <p class="card-description fw-1x pd-right-1x">{views} views</p>
              <p className="t5">|</p>
              <p class="card-description fw-1x pd-left-1x">{created}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
