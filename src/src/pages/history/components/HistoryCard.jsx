import React from "react";
import "./HistoryCard.css";

const HistoryCard = ({
  title,
  thumbnail,
  artist,
  description,
  views,
  created,
}) => {
  return (
    <div className="card card-horizontal">
      <img
        className="card-img-horizontal history-card-img"
        src={thumbnail}
        alt="card"
      />
      <div className="card-content-horizontal">
        <div className="card-content">
          <p className="card-title fw-1x t4 mg-right-5x">{title}</p>
          <p className="card-sub-title fw-1x">{artist}</p>
          <p className="card-description fw-1x pd-right-1x">{description}</p>
        </div>
        <span className="flex">
          <p className="card-description fw-1x pd-right-1x">{views} views</p>
          <p className="t5">|</p>
          <p className="card-description fw-1x pd-left-1x">{created}</p>
        </span>
      </div>
    </div>
  );
};

export default HistoryCard;
