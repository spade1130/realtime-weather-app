// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";

import * as serviceWorker from './serviceWorker';

// 這支 CSS 檔的樣式會作用到全域
import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// 將 PWA 中的 Service Worker 功能打開
serviceWorker.register();