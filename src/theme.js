import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#C8D2EA",
    },
    text: {
      primary: "#000B1F",
    },
    boxShadow: "0px 3px 12px 0px #677ad145",

    primary: {
      100: "#C8D2EA",
      200: "#DDE1EB",
      300: "#677AD1",
      400: "#0B234D",
      500: "#000B1F",

      600:"#CBD5EA",
      // light: "#C8D2EA",
      // contrastText: "#677AD1",
      // dark: "#000B1F",
      // main: "#DDE1EB",

      A100: "#9CD5E8", //light green
      A200: "#00805C", //dark

      A300: "#70A6DE", //blue
      A400: "#003B86",

      A500: "#E9C3E9", // pink
      A600: "#B16301",
    },
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },
});
