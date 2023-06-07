import "styled-components/native";
import { ThemeColors, ThemeFonts } from "./types";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
