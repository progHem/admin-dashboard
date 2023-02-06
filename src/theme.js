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
      light: "#C8D2EA",
      contrastText: "#677AD1",
      dark: "#000B1F",
      main: "#DDE1EB",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
