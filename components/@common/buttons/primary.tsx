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

export type PrimaryButtonProps = {
  onPress: () => void;
  children: ReactNode;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  disabled?: boolean;
} & Partial<ButtonProps>;

export const PrimaryButton = ({
  onPress,
  children,
  mode = "contained",
  disabled,
  ...props
}: PrimaryButtonProps) => {
  const { colors, fonts } = useTheme();

  return (
    <Button
      buttonColor={disabled ? colors.disabled : colors.primary}
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <StyledText textColor={colors.textLight} fontFamily={fonts.medium}>
        {children}
      </StyledText>
    </Button>
  );
};

export const elevatedPrimaryButtonStyles = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};
