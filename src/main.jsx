import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";
import Lobby from "./Components/Lobby";
import Home from "./Components/Home";
import SlideApp from "./Components/SlideApp";
import Options from "./Components/Options";
import StoreOptions from "./Components/StoreOption";
import Result from "./Components/Result";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <LightNodeProvider
        options={{ defaultBootstrap: true }}
        protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
      >
        <Provider store={store}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/lobby" exact element={<Lobby />} />
            <Route path="/game" exact element={<App />} />
            <Route path="/result" exact element={<Result />} />
            <Route path="/Character" exact element={<SlideApp data={"1"} />} />
            <Route path="/Guns" exact element={<SlideApp data={"2"} />} />
            <Route path="/Car" exact element={<SlideApp data={"3"} />} />
            <Route path="/options" exact element={<Options />} />
            <Route path="/optstore" exact element={<StoreOptions />} />
          </Routes>
        </Provider>
      </LightNodeProvider>
    </Router>
  </React.StrictMode>
);
