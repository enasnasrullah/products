import { Theme, createTheme } from "@mui/material/styles";

import "./muiModulesOverRide";

import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakPoints";

export const defaultTheme = { palette, typography, breakpoints };

const buildTheme = (): Theme => createTheme(defaultTheme);

const theme = buildTheme();

export default theme;
