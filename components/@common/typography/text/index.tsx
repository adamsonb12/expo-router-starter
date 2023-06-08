import styled from "styled-components/native";
import {
  Text as PaperText,
  TextProps as PaperTextProps,
} from "react-native-paper";

export const Text = styled(PaperText).attrs({
  maxFontSizeMultiplier: 1.3,
  minimumFontScale: 0.8,
})`
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.text};
`;

export type TextProps = Omit<
  // @ts-ignore
  PaperTextProps,
  "maxFontSizeMultiplier" | "minimumFontScale" | "theme"
>;
