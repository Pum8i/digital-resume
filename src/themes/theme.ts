import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accents: Palette["primary"];
  }

  interface PaletteOptions {
    accents?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    blue: string;
    brown: string;
    burgundy: string;
    green: string;
    orange: string;
    purple: string;
  }

  interface SimplePaletteColorOptions {
    blue: string;
    brown: string;
    burgundy: string;
    green: string;
    orange: string;
    purple: string;
  }
}

export const defaultTheme = (accent: string | undefined) => {
  let theme = createTheme({
    palette: {
      accents: {
        main: "#1976d2",
        blue: "#1f3864",
        brown: "#954535",
        burgundy: "#800020",
        green: "#228B22",
        orange: "#CC5500",
        purple: "#8E4585",
      },
    },
  });

  const color = accent ?? theme.palette.accents.blue;

  theme = createTheme(theme, {
    typography: {
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        color,
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontStyle: "italic",
        color,
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color,
      },
      h4: {
        fontSize: "1rem",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "1rem",
        fontWeight: "bold",
        fontStyle: "italic",
      },
    },
  });
  return theme;
};
