import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import "./index.css";
import { store } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import MainLayout from "./components/Layouts";
import Router from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Router exact path="/" />
          </MainLayout>
        </PersistGate>
      </Provider>
    </HashRouter>
  </StrictMode>
);
