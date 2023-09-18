import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.jsx";
import "normalize.css";
import "@/assets/css/index.less";
import theme from "@/assets/theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </ThemeProvider>
  </Provider>
);
