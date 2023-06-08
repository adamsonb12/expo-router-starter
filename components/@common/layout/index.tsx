import { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";

export const FullScreen = ({ children, ...props }: { children: ReactNode }) => {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const { colors } = useTheme();

  return (
    <View
      style={{
        width,
        height,
        overflow: "hidden",
        backgroundColor: colors.background,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export const TabScreenContentContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const FullScreenContentContainer = styled(View)<{
  top: number;
  bottom: number;
}>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${(props) => props.top}px;
  padding-bottom: ${(props) => props.bottom}px;
`;

export const FullScreenContentWithSafePadding = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <FullScreen>
      <FullScreenContentContainer top={top} bottom={bottom} {...props}>
        {children}
      </FullScreenContentContainer>
    </FullScreen>
  );
};
