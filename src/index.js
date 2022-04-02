import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const ReactRoot = createRoot(rootElement);
ReactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
