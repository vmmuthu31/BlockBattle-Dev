import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import { LightNodeProvider } from "@waku/react";
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <LightNodeProvider
        options={{ defaultBootstrap: true }}
        protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
      >
        <Provider store={store}>
          <Routes>
            <Route path="/" exact element={<App />} />
          </Routes>
        </Provider>
      </LightNodeProvider>
    </Router>
  </React.StrictMode>
);
