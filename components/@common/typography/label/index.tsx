import { Text, TextProps } from "../text";

export const Label = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="labelMedium" {...props}>
      {children}
    </Text>
  );
};

export const LabelLarge = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="labelLarge" {...props}>
      {children}
    </Text>
  );
};

export const LabelSmall = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="labelSmall" {...props}>
      {children}
    </Text>
  );
};
