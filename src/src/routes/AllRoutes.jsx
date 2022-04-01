import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Playlist,
  VideoListing,
  WatchLater,
  History,
  Auth,
} from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoListing />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
