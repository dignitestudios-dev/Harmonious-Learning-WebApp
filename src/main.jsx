import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  AppContextProvider,
  AuthContextProvider,
} from "./contexts/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
