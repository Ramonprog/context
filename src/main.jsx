import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TitleColorContextProvider } from "./context/TitleColorContext";
import { CounterContextProvider } from "./context/CounterContex";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
