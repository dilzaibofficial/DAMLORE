import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Red
    },
    background: {
      default: "#f5f5f5", // Light gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;