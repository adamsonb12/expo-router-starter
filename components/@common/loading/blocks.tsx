import React, { useRef } from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { Platform } from "react-native";

import { FullScreenContentWithSafePadding } from "../layout";
import { TitleLarge } from "../typography/title";

const StyledScreenContainer = styled(FullScreenContentWithSafePadding)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BlocksLoader = () => {
  const animation = useRef(null);

  // Lottie does not work in web in RN app
  if (Platform.OS === "web") {
    return (
      <StyledScreenContainer>
        <TitleLarge>Loading...</TitleLarge>
      </StyledScreenContainer>
    );
  }

  return (
    <LottieView
      autoPlay
      ref={animation}
      source={require("../../../assets/animations/blocks.json")}
    />
  );
};
