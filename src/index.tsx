import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/common/App";
import { store, StoreContext } from "./common/stores/Store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
