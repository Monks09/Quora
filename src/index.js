import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
