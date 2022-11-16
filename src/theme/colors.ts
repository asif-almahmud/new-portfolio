import { darken, lighten } from "@mui/material";

const black = "#000000";
const highlight = "#494975";
// const highlight = "#F4832A";
// const highlight = "#8B40dA";

export const primary = {
  superLight: lighten(black, 0.97),
  lighter: lighten(black, 0.65),
  light: lighten(black, 0.5),
  main: lighten(black, 0.35),
  dark: lighten(black, 0.25),
  contrastText: "#fff",
};

export const secondary = {
  superLight: lighten(highlight, 0.85),
  lighter: lighten(highlight, 0.55),
  light: lighten(highlight, 0.3),
  main: highlight,
  dark: darken(highlight, 0.3),
  contrastText: "#fff",
};
