import { Text, TextProps } from "../text";

export const Paragraph = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="bodyMedium" {...props}>
      {children}
    </Text>
  );
};

export const ParagraphLarge = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="bodyLarge" {...props}>
      {children}
    </Text>
  );
};

export const ParagraphSmall = ({ children, ...props }: TextProps) => {
  return (
    <Text variant="bodySmall" {...props}>
      {children}
    </Text>
  );
};
