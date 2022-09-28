import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Routes";

import "./index.css";
import { store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router exact path="/" />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
