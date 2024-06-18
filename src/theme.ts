import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body1: {
      fontSize: "14px",
      lineHeight: 1.43,
      fontWeight: 548,
      letterSpacing: "-0.5px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: 1.5,
      fontWeight: "400",
    },
    h2: {
      fontSize: "20px",
      lineHeight: 1.3,
      fontWeight: "bold",
      letterSpacing: "-0.7px",
    },
    h3: {
      fontSize: "30px",
      lineHeight: 1.067,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media (min-width: 1200px)": {
            // 1160 + 24 * 2
            maxWidth: "1208px",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "8px",
          gap: "10px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "10px",
          gap: "12px",
          borderRadius: "10px",
          color: "#7B7EA5",
          transition: "0.3s ease all",

          "&:hover": {
            background: "#F1F3F7",
            color: "#06082C",
          },

          "&.Mui-selected": {
            background: "#F1F3F7",
            color: "#06082C",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          color: "inherit",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#F1F3F7",
          borderBottomWidth: 1,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#7B7EA5",
      light: "#9395B8",
      dark: "#06082C",
    },
    error: {
      main: "#D21010",
    },
    background: {
      default: "#F1F3F7",
      paper: "#FFFFFF",
    },
  },
});

export default theme;
