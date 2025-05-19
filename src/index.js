import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App"; // Main App component
import theme from "./theme"; // Import the custom MUI theme
import "./index.css"; // Global CSS (if any)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default browser styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
