import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "./components/Snackbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StyledEngineProvider injectFirst>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </StyledEngineProvider>
);

reportWebVitals();
