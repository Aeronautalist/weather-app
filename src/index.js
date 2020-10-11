import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

// import { BrowserRouter as Router } from "react-router-dom";
// const store = configureStore();

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
