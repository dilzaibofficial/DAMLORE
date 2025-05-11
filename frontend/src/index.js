import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Import your custom theme
// filepath: d:\Outside Projects\DAM\frontend\src\index.js
import './styles/global.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);