import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Playlist,
  VideoListing,
  WatchLater,
  History,
  Auth,
  VideoPlayer,
  SinglePlaylist,
} from "../pages";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoListing />} />
      <Route path="/videoplayer/:videoId" element={<VideoPlayer />} />
      <Route
        path="/playlist"
        element={
          <PrivateRoutes>
            <Playlist />
          </PrivateRoutes>
        }
      />
      <Route
        path="/watchlater"
        element={
          <PrivateRoutes>
            <WatchLater />
          </PrivateRoutes>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoutes>
            <History />
          </PrivateRoutes>
        }
      />
      <Route
        path="/single-playlist/:playlistId"
        element={
          <PrivateRoutes>
            <SinglePlaylist />
          </PrivateRoutes>
        }
      />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
