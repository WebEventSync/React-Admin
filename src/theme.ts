import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#19d3ff",
    },

    secondary: {
      main: "#7b3ff2",
    },

    background: {
      default: "#1d1d73",
      paper: "#11172f",
    },

    text: {
      primary: "#ffffff",
      secondary: "#9fb3d1",
    },
  },

  shape: {
    borderRadius: 18,
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h5: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#141d38",
          border: "1px solid rgba(255,255,255,.06)",
          boxShadow: "0 10px 25px rgba(0,0,0,.25)",
          borderRadius: 18,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#11172f",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#11172f",
          borderRight: "1px solid rgba(255,255,255,.08)",
        },
      },
    },
  },
});

export default theme;