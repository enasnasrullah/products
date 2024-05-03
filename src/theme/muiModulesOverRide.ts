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

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title?: true;
    h1?: true;
    bodyText1?: true;
    bodyText2?: true;
    bodyText3?: true;
    bodyText4?: true;
    bodyText5?: true;
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
    title?: CSSProperties;
    h1?: CSSProperties;
    bodyText1?: CSSProperties;
    bodyText2?: CSSProperties;
    bodyText3?: CSSProperties;
    bodyText4?: CSSProperties;
    bodyText5?: CSSProperties;
  }
}
