import styled from "styled-components/native";
import { Text, TextProps } from "../text";

const StyledText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Title = ({ children, ...props }: TextProps) => {
  return (
    <StyledText variant="titleMedium" {...props}>
      {children}
    </StyledText>
  );
};

export const TitleLarge = ({ children, ...props }: TextProps) => {
  return (
    <StyledText variant="titleLarge" {...props}>
      {children}
    </StyledText>
  );
};

export const TitleSmall = ({ children, ...props }: TextProps) => {
  return (
    <StyledText variant="titleSmall" {...props}>
      {children}
    </StyledText>
  );
};
