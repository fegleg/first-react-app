import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App hello="Hello world" who="others" />
    <App hello="Hello world" who="students" />
    <App hello="Hello world" who="teachers" />
    <App hello="Hello world" who="martians" />
    <App />
  </React.StrictMode>
);
