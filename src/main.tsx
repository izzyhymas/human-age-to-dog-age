import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import grassImg from "./assets/grass.png";
import retro from "./assets/fonts/kindly-rewind-font/KindlyRewind-BOon.ttf";

document.documentElement.style.setProperty(
  "--background-image-url",
  `url(${grassImg})`
);
document.documentElement.style.setProperty(
  "--kindly-rewind-font-url",
  `url(${retro})`
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
