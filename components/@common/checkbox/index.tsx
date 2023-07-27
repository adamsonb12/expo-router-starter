import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Label } from "../typography/label";
import { spacing8 } from "../spacing";

export const Checkbox = ({
  checked,
  color,
  onPress,
}: {
  checked?: boolean;
  color?: string;
  onPress: () => void;
} & Partial<Omit<TouchableOpacityProps, "onPress">>) => {
  const { colors } = useTheme();
  return (
    <CheckboxButton onPress={onPress}>
      {checked && (
        <MaterialCommunityIcons
          name="checkbox-marked"
          size={24}
          color={color ? color : colors.primary}
        />
      )}
      {!checked && (
        <MaterialCommunityIcons
          name="checkbox-blank-outline"
          size={24}
          color={color ? color : colors.primary}
        />
      )}
    </CheckboxButton>
  );
};

export const CheckboxButton = styled(TouchableOpacity)<{ size?: number }>`
  height: ${(props) => (props.size ? props.size + 20 : 24 + 20)}px;
  width: ${(props) => (props.size ? props.size + 20 : 24 + 20)}px;
  padding: 10px;
`;

export const CheckboxContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxLabelContainer = styled(Label)`
  margin-left: ${spacing8};
`;

export const CheckboxField = ({
  checked,
  color,
  children,
  onPress,
  testID,
  ...props
}: {
  checked?: boolean;
  color?: string;
  children?: string | ReactNode;
  onPress: () => void;
  testId?: string;
} & Partial<Omit<TouchableOpacityProps, "onPress" | "hitSlop">>) => {
  return (
    <CheckboxContainer {...props}>
      <Checkbox
        checked={checked}
        color={color}
        onPress={onPress}
        testID={testID}
      />
      <CheckboxLabelContainer>{children}</CheckboxLabelContainer>
    </CheckboxContainer>
  );
};
