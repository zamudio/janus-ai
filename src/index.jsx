import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./container/App";
import "tachyons";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
