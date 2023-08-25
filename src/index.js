import React from "react";
import ReactDOM from "react-dom/client";
import "./css-styles/triangles.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
// import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
