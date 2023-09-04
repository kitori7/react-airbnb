import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.jsx";
import "normalize.css";
import "@/assets/css/reset.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
  // </React.StrictMode>,
);
