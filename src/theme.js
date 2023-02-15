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
      400:"#0B234D",
      light: "#C8D2EA",
      contrastText: "#677AD1",
      dark: "#000B1F",
      main: "#DDE1EB",
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
