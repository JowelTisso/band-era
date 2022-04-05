import React from "react";
import "./VideoCard.css";

const VideoCard = ({ title, thumbnail, artist, views, created }) => {
  return (
    <div className="mg-top-1x">
      <div className="card card-horizontal">
        <img className="card-img-horizontal" src={thumbnail} alt="card" />
        <div className="card-content-horizontal">
          <div className="card-content">
            <p className="card-title fw-1x t4">{title}</p>
            <p className="card-sub-title fw-1x">{artist}</p>
            <span className="flex">
              <p className="card-description fw-1x pd-right-1x">
                {views} views
              </p>
              <p className="t5">|</p>
              <p className="card-description fw-1x pd-left-1x">{created}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
