import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material" {
  interface Color {
    [key: string]: string;
  }

  interface SimplePaletteColorOptions {
    [key: string]: string;
  }

  interface Palette {
    border: PaletteColorOptions;
    boxShadow: PaletteColorOptions;
    neutrals: PaletteColorOptions;
  }

  interface PaletteColor {
    [key: string]: string;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyleOptions {
    fontWeightThin?: number;
    fontWeightLight?: number;
    fontWeightNormal?: number;
    fontWeightDemiBold?: number;
    fontWeightExtraBold?: number;
    fontWeightHeavy?: number;
    fontFamilyBold?: string;
  }
}
