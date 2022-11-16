import {
  createTheme,
  darken,
  PaletteColorOptions,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import { breakPoints } from "./breakPoints";
import { primary, secondary } from "./colors";
import { typography } from "./typography";
//   import componentOverrideConfigs from './components.overrides';

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    // container: true;
    xl: true;
    xxl: true;
  }

  interface PaletteColor {
    // variant: {
    //   50: string;
    //   100: string;
    //   200: string;
    //   300: string;
    //   400: string;
    //   500: string;
    //   600: string;
    //   700: string;
    //   800: string;
    //   900: string;
    //   A100: string;
    //   A200: string;
    //   A400: string;
    //   A700: string;
    // };
    superLight: string;
    lighter: string;
    light: string;
  }

  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const options: ThemeOptions = {
  palette: {
    primary: primary,
    secondary: secondary,
    // info: variables.secondary,
    // error: {
    //   main: variables.error,
    // },
  },
  // components: componentOverrideConfigs,
  typography: typography,
  breakpoints: {
    values: breakPoints,
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableElevation: true,
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      variants: [
        // {
        //   props: { variant: 'dashed' },
        //   style: {
        //     textTransform: 'none',
        //     border: `2px dashed ${blue[500]}`,
        //   },
        // },
        // {
        //   props: { variant: 'dashed', color: 'secondary' },
        //   style: {
        //     border: `4px dashed ${red[500]}`,
        //   },
        // },
      ],
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: '1rem',
          textTransform: "none",
          padding: "2px 10px",
          "&:focus": {
            outline: `3px solid ${darken(secondary.superLight, 0.05)}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // color: "rgba(255, 255, 255, 0.87)",
          "&:focused": { color: "white" },
        },
        shrink: {
          "&:focused": { color: "white" },
        },
      },
    },
  },
};

export const theme = responsiveFontSizes(createTheme(options));
