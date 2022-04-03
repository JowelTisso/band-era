import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./src/context/provider/AuthProvider";
import { VideoProvider } from "./src/context/provider/VideoProvider";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const ReactRoot = createRoot(rootElement);
ReactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
