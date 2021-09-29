import { alpha, darken, lighten } from "@mui/material";
import { blue } from "@mui/material/colors";

export const THEMES: PaletteType[] = ["light", "dark"];

export const BACKGROUND_COLORS_DEFAULT = {
  light: "#f5f5f5",
  dark: "#0e0e0e",
};

export const BACKGROUND_COLORS_PAPER = {
  light: "#ffffff",
  dark: "#181818",
};

export const THEME_PRIMARY_COLORS = {
  light: {
    main: blue.A400,
    light: blue.A200,
    dark: blue.A700,
  },
  dark: {
    main: blue.A100,
    light: lighten(blue.A100, 0.05),
    dark: darken(blue.A100, 0.1),
  },
};

export const THEME_TEXT_COLORS = {
  light: {
    primary: "#000",
    secondary: "rgb(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  dark: {
    primary: "#fff",
    secondary: alpha("#e9e9e9", 0.54),
    disabled: alpha("#e9e9e9", 0.38),
  },
};

export const THEME_NAMES = {
  light: "Светлая",
  dark: "Тёмная",
};

export type PaletteType = "light" | "dark";

export const THEME_TYPES = {
  light: "light",
  dark: "dark",
};
