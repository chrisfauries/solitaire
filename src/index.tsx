import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EventBoundary from "./components/EventBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <EventBoundary>
        <App />
      </EventBoundary>
    </RecoilRoot>
  </React.StrictMode>
);
