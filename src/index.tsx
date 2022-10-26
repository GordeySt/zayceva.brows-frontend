import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/common/App";
import { store, StoreContext } from "./common/stores/Store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./common/config/i18n";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById("root")
);
