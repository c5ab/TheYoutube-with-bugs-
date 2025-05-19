import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    primary: {
      main: "#FC1503", // Vibrant red for accents
    },
    secondary: {
      main: "#03DAC6", // Teal for secondary accents
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1E1E1E", // Slightly lighter for cards
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#AAAAAA", // Gray text
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.9rem",
    },
    body2: {
      fontSize: "0.85rem",
      color: "#AAAAAA",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.7)",
          },
        },
      },
    },
  },
});

export default theme;