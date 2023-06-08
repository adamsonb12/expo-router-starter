import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-native-paper";
import styled from "styled-components/native";

import { Text } from "../typography/text";
import { useTheme } from "styled-components/native";

const StyledText = styled(Text)<{ textColor: string; fontFamily: string }>`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textColor};
`;

export const SecondaryButton = ({
  onPress,
  children,
  disabled,
  mode = "outlined",
  fontFamily,
  fontColor,
  ...props
}: {
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  fontFamily?: string;
  fontColor?: string;
} & Partial<ButtonProps>) => {
  const { fonts, colors } = useTheme();

  return (
    <Button
      mode={mode}
      onPress={onPress}
      theme={{
        colors: {
          primary: colors.primary,
        },
      }}
      style={{
        borderColor: colors.primary,
      }}
      disabled={disabled}
      {...props}
    >
      <StyledText
        textColor={fontColor ?? colors.primary}
        fontFamily={fontFamily ?? fonts.medium}
      >
        {children}
      </StyledText>
    </Button>
  );
};
