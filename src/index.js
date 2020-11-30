import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Contexts/store";
import { AuthorizedProvider } from "./Contexts/Authorized";

ReactDOM.render(
  <React.StrictMode>
    <AuthorizedProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AuthorizedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
