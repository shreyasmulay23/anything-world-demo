import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AnythingWorldContext from "./AnythingWorldContext";

ReactDOM.render(
  <React.StrictMode>
    <AnythingWorldContext>
      <App />
    </AnythingWorldContext>
  </React.StrictMode>,
  document.getElementById("root")
);
