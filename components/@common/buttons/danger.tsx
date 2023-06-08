import { useTheme } from "styled-components/native";
import { PrimaryButton, PrimaryButtonProps } from "./primary";

export const DangerButton = (props: PrimaryButtonProps) => {
  const { colors } = useTheme();

  return (
    <PrimaryButton
      {...props}
      style={{
        // @ts-ignore
        ...(props.style ? { ...props.style } : null),
        backgroundColor: colors.danger,
      }}
    />
  );
};
